import type { Dispatch, FC, SetStateAction } from "react";
import { Button } from "@nextui-org/react";
import Dropzone from "../../Dropzone";

type AddMonthlyExpnesesProps = {
  setIsAddMonthlyExpneses: Dispatch<SetStateAction<boolean>>;
};

const AddMonthlyExpneses: FC<AddMonthlyExpnesesProps> = ({
  setIsAddMonthlyExpneses,
}) => {
  return (
    <>
      <Dropzone
        title={"Drag or drop files here, or click to select"}
        helperText={"Accepted formats: .xml"}
      />
      <div className="flex flex-col items-center gap-[10px]">
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
