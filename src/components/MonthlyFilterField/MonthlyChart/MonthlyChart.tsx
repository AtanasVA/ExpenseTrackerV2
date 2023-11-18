import { Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import { MONTHS } from "~/utils/months.constants";
import { ChartBar } from "../SingleChartBar/ChartBar";
import { getCurrentMonth } from "~/utils/getCurrentMonth";

const MonthlyChart = () => {
  return (
    <>
      <div className="flex w-[100%] items-center justify-between">
        <h2>Filter by month</h2>
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
      {/* TODO: Make the Card field into a reusable component */}
      <Card className="dark:bg-content2">
        <CardBody>
          <div className="flex h-[180px] justify-evenly">
            {MONTHS.map((month) => (
              //TODO: The value data of the ChartBar component should be the sum of all expenses for that month
              <ChartBar key={month} label={month} value={50} maxValue={100} />
            ))}
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default MonthlyChart;
