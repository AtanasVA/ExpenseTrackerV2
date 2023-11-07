import { Card, CardBody, Button, Input } from "@nextui-org/react";
import { useState } from "react";

const AddManualExpense = () => {
  const [isBodyExpanded, setIsBodyExpanded] = useState<boolean>(false);
  return (
    <div>
      <Card
        isBlurred
        className="mb-[15px] w-[100%] bg-background/60 dark:bg-default-100/50"
      >
        <CardBody
          style={{
            display: isBodyExpanded ? "box" : "flex",
            height: isBodyExpanded ? "220px" : "120px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isBodyExpanded ? (
            <div className="flex w-[90%] flex-col gap-[10px]">
              <div className="flex flex-1 gap-[10px]">
                <Input
                  size="lg"
                  type="email"
                  label="Title"
                  labelPlacement={"inside"}
                />
                <Input
                  size="lg"
                  type="number"
                  label="Amount"
                  placeholder="0.00"
                  labelPlacement={"inside"}
                  endContent={
                    <div className="pointer-events-none flex items-center">
                      <span className="text-default-400">$</span>
                    </div>
                  }
                />
              </div>
              <div className="flex w-[50%] flex-1">
                <Input
                  size="lg"
                  type="email"
                  label="Date"
                  labelPlacement={"inside"}
                />
              </div>
              <div className="flex w-[100%] flex-1 justify-end gap-[10px]">
                <Button
                  onClick={() => {
                    return;
                  }}
                >
                  Add expense
                </Button>
                <Button onClick={() => setIsBodyExpanded(false)}>
                  Close drawer
                </Button>
              </div>
            </div>
          ) : (
            <Button
              className="h-[60px] w-[30%]"
              onClick={() => setIsBodyExpanded(true)}
            >
              Add new expense
            </Button>
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default AddManualExpense;
