import { Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import { MONTHS } from "~/utils/months.constants";
import { ChartBar } from "../SingleChartBar/ChartBar";
import { getCurrentMonth } from "~/utils/getCurrentMonth";

const MonthlyChart = () => {
  return (
    //TODO: Make the Card field into a reusable component
    <Card
      isBlurred
      className="w-[100%] bg-background/60 dark:bg-default-100/50"
    >
      <CardBody className="gap-6 p-[20px]">
        <div className="flex w-[100%] items-center justify-between">
          <h1>Filter by month</h1>
          <Select
            label="Select a month"
            defaultSelectedKeys={[`${getCurrentMonth()}`]}
            className="max-w-xs"
          >
            {MONTHS.map((month) => (
              <SelectItem key={month} value={month}>
                {month}
              </SelectItem>
            ))}
          </Select>
        </div>
        <div className="flex h-[180px] justify-evenly">
          {MONTHS.map((month) => (
            //TODO: The value data of the ChartBar component should be the sum of all expenses for that month
            <ChartBar key={month} label={month} value={20} maxValue={100} />
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MonthlyChart;
