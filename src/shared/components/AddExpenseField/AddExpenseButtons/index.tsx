import type { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@nextui-org/react";
import { AddExpense } from "~/shared/SVG/AddExpense";
import { AddImage } from "~/shared/SVG/AddFile";

type AddExpenseButtonsProps = {
  setIsSingleExpanded: Dispatch<SetStateAction<boolean>>;
  setIsMonthlyExpanded: Dispatch<SetStateAction<boolean>>;
};

const AddExpenseButtons: FC<AddExpenseButtonsProps> = ({
  setIsSingleExpanded,
  setIsMonthlyExpanded,
}) => {
  return (
    <>
      <div className="inline-flex gap-[10px]">
        <Button onClick={() => setIsSingleExpanded(true)}>
          <AddExpense />
          Add new expense
        </Button>
        <Button onClick={() => setIsMonthlyExpanded(true)}>
          <AddImage />
          Upload monthly expenses
        </Button>
      </div>
    </>
  );
};

export default AddExpenseButtons;
