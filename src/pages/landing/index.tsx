import { Button, Card, CardBody } from "@nextui-org/react";

const KingsLanding = () => {
  return (
    <div>
      <Card
        isBlurred
        className="bg-background/60 dark:bg-default-100/50 h-[120px] w-[100%]"
        shadow="sm"
      >
        <CardBody
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button className="h-[60px] w-[30%]">Add new expense</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default KingsLanding;
