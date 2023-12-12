import type { Dispatch, FC, SetStateAction } from "react";
import { Button, Input } from "@nextui-org/react";

type AddSingleExpenseProps = {
  setIsAddSingleExpense: Dispatch<SetStateAction<boolean>>;
};

const AddSingleExpense: FC<AddSingleExpenseProps> = ({
  setIsAddSingleExpense,
}) => {
  return (
    <>
      <div className="flex w-[90%] flex-col gap-[10px]">
        <div className="flex flex-1 gap-[10px]">
          {/* //TODO: Export Inputs to styled component */}
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
          <Button onClick={() => setIsAddSingleExpense(false)}>
            Close drawer
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddSingleExpense;
