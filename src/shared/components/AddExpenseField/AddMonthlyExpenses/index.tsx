import type { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@nextui-org/react";

type AddMonthlyExpnesesProps = {
  setIsAddMonthlyExpneses: Dispatch<SetStateAction<boolean>>;
};

const AddMonthlyExpneses: FC<AddMonthlyExpnesesProps> = ({
  setIsAddMonthlyExpneses,
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-[10px]">
        <h1>DROPZONE COMPONENT</h1>
        <div className="flex  gap-[10px]">
          <Button
            onClick={() => {
              return;
            }}
          >
            Add expense
          </Button>
          <Button onClick={() => setIsAddMonthlyExpneses(false)}>
            Close drawer
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddMonthlyExpneses;
