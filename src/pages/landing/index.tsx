import { Card, CardBody } from "@nextui-org/react";
import AddManualExpense from "~/components/AddExpenseField/AddManualExpense";
import ExpenseItem from "~/components/ExpensesField/ExpenseItem";
import MonthlyChart from "~/components/MonthlyFilterField/MonthlyChart/MonthlyChart";

const KingsLanding = () => {
  return (
    <>
      <AddManualExpense />
      {/* TODO: Make the Card field into a reusable component */}
      <Card
        isBlurred
        className="w-[100%] bg-background/60 dark:bg-default-100/50"
      >
        <CardBody className="gap-6 p-[20px]">
          <MonthlyChart />
          {/* TODO: Make the Card field into a reusable component */}
          <Card className="h-[90px] dark:bg-content2">
            <CardBody className="flex-row items-center justify-between">
              <ExpenseItem date={new Date()} title="Testing" amount={23} />
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </>
  );
};

export default KingsLanding;
