import { Button } from "@nextui-org/react";
import type { Dispatch, SetStateAction } from "react";

type AddNewExpenseFieldsProps = {
  handleClose: Dispatch<SetStateAction<boolean>>;
};

const UploadExpenseFields = ({ handleClose }: AddNewExpenseFieldsProps) => {
  return (
    <>
      <div className="flex w-[90%] flex-col gap-[10px]">
        <div className="flex w-[100%] flex-1 justify-center gap-[10px]">
          <Button
            onClick={() => {
              handleClose(false);
            }}
          >
            Upload expense
          </Button>
          <Button onClick={() => handleClose(false)}>Close drawer</Button>
        </div>
      </div>
    </>
  );
};

export default UploadExpenseFields;
