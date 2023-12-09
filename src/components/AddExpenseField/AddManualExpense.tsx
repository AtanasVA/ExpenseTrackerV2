import { Card, CardBody, Button } from "@nextui-org/react";
import { FilePlus, Plus } from "lucide-react";
import { useState } from "react";
import AddNewExpenseFields from "./AddNewExpenseFields";
import UploadExpenseFields from "./UploadExpense";

const AddManualExpense = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [isImport, setIsImport] = useState<boolean>(false);
  return (
    <div>
      {/* TODO: Make the Card field into a reusable component */}
      <Card
        isBlurred
        className="mb-[15px] w-[100%] bg-background/60 dark:bg-default-100/50"
      >
        <CardBody
          style={{
            //TODO: Fix this hacky way of making the CardBody height dynamic
            display: isImport || isAdd ? "box" : "flex",
            height: isImport || isAdd ? "220px" : "120px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!(isImport || isAdd) ? (
            <div className="flex gap-[10px]">
              <Button
                startContent={<Plus size={20} />}
                onClick={() => setIsAdd(true)}
              >
                Add new expense
              </Button>
              <Button
                variant="bordered"
                startContent={<FilePlus size={20} />}
                onClick={() => setIsImport((prev) => !prev)}
              >
                Import
              </Button>
            </div>
          ) : null}
          {isAdd && <AddNewExpenseFields handleClose={setIsAdd} />}
          {isImport && <UploadExpenseFields handleClose={setIsImport} />}
        </CardBody>
      </Card>
    </div>
  );
};

export default AddManualExpense;
