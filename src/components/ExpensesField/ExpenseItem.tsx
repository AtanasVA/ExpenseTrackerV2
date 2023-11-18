import ExpenseDate from "./ExpenseDate";
// import Card from "../UI/Card";

type ExpenseItemProps = {
  date: Date;
  title: string;
  amount: number;
};

const ExpenseItem = ({ date, title, amount }: ExpenseItemProps) => {
  return (
    <div className="expense-item ">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
