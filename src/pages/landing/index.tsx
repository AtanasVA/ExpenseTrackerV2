import { Card, CardBody } from "@nextui-org/react";
import AddManualExpense from "~/components/AddExpenseField/AddManualExpense";
import ExpenseItem from "~/components/ExpensesField/ExpenseItem";
import MonthlyChart from "~/components/MonthlyFilterField/MonthlyChart/MonthlyChart";
import { Divider } from "@nextui-org/react";

const EXPENSES_BOILERPLATE = [
  { date: new Date("2023-11-01"), title: "Testing", amount: 23 },
  { date: new Date("2023-10-25"), title: "Development", amount: 45 },
  { date: new Date("2023-11-10"), title: "Meeting", amount: 12 },
  { date: new Date("2023-10-15"), title: "Presentation", amount: 30 },
  { date: new Date("2023-11-05"), title: "Project", amount: 18 },
  { date: new Date("2023-10-20"), title: "Testing", amount: 50 },
  { date: new Date("2023-11-15"), title: "Development", amount: 38 },
  { date: new Date("2023-10-30"), title: "Meeting", amount: 15 },
  { date: new Date("2023-11-08"), title: "Presentation", amount: 28 },
  { date: new Date("2023-10-10"), title: "Project", amount: 42 },
];

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
          <Card className=" dark:bg-content2">
            <CardBody className="flex items-center justify-between">
              {EXPENSES_BOILERPLATE.map(({ date, title, amount }) => (
                <>
                  <ExpenseItem
                    key={title}
                    date={date}
                    title={title}
                    amount={amount}
                  />
                  {EXPENSES_BOILERPLATE.length > 2 && <Divider />}
                </>
              ))}
            </CardBody>
          </Card>
        </CardBody>
      </Card>
    </>
  );
};

export default KingsLanding;
