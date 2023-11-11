import { useEffect, useState } from "react";

type ChartBarProps = {
  label: string;
  value: number;
  maxValue: number;
};

export const ChartBar = ({ label, value, maxValue }: ChartBarProps) => {
  const [fillAmount, setFillAmount] = useState<string>("0%");

  useEffect(() => {
    if (maxValue) {
      setFillAmount(`${Math.round((value / maxValue) * 100)}%`);
    }
  }, [maxValue, value]);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillAmount }} />
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};
