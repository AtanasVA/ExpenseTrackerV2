import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import AddSingleExpense from "./AddSingleExpense";
import AddMonthlyExpneses from "./AddMonthlyExpenses";
import AddExpenseButtons from "./AddExpenseButtons";

const AddManualExpense = () => {
  const [isSingleExpanded, setIsSingleExpanded] = useState<boolean>(false);
  const [isMonthlyExpanded, setIsMonthlyExpanded] = useState<boolean>(false);
  const hideButtons = isSingleExpanded || isMonthlyExpanded;
  return (
    <div>
      {/* TODO: Make the Card field into a reusable component */}
      <Card
        isBlurred
        className="mb-[15px] w-[100%] bg-background/60 dark:bg-default-100/50"
      >
        {/* TODO: Fix this hacky way of changing the style of the card */}
        <CardBody
          style={{
            display: isSingleExpanded || isMonthlyExpanded ? "box" : "flex",
            height: isSingleExpanded || isMonthlyExpanded ? "220px" : "120px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!hideButtons && (
            <AddExpenseButtons
              setIsSingleExpanded={setIsSingleExpanded}
              setIsMonthlyExpanded={setIsMonthlyExpanded}
            />
          )}
          {isSingleExpanded && (
            <AddSingleExpense setIsAddSingleExpense={setIsSingleExpanded} />
          )}
          {isMonthlyExpanded && (
            <AddMonthlyExpneses
              setIsAddMonthlyExpneses={setIsMonthlyExpanded}
            />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default AddManualExpense;
