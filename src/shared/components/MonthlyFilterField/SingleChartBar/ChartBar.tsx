import { useEffect, useState } from "react";
import { calcFillAmmount, getColumnColor } from "~/utils/chartBars";

type ChartBarProps = {
  label: string;
  value: number;
  maxValue: number;
};

export const ChartBar = ({ label, value, maxValue }: ChartBarProps) => {
  const barColor = getColumnColor(value, maxValue);
  const [fillAmount, setFillAmount] = useState<string>("0%");

  useEffect(() => {
    if (maxValue) {
      setFillAmount(`${calcFillAmmount(value, maxValue)}%`);
    }
  }, [maxValue, value]);

  return (
    <div className="chart-bar ">
      <div className="chart-bar__inner">
        <div
          className={`chart-bar__fill`}
          style={{
            height: fillAmount,
            backgroundColor: `hsl(var(--nextui-${barColor}-300))`,
          }}
        />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
