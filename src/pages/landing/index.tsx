import { Card, CardBody } from "@nextui-org/react";
import AddManualExpense from "~/components/AddExpenseField/AddManualExpense";

const KingsLanding = () => {
  return (
    <div>
      <AddManualExpense />
      <Card
        isBlurred
        className="w-[100%] bg-background/60 dark:bg-default-100/50"
      >
        <CardBody className="h-[120px]"></CardBody>
      </Card>
    </div>
  );
};

export default KingsLanding;
