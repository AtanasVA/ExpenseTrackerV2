export const calcFillAmmount = (value: number, maxValue: number) =>
  Math.round((value / maxValue) * 100);

export const getColumnColor = (value: number, maxValue: number) => {
  const chartBarAmount = calcFillAmmount(value, maxValue);
  switch (true) {
    case chartBarAmount <= 50:
      return "success";
    case chartBarAmount > 50 && chartBarAmount < 75:
      return "warning";
    case chartBarAmount > 75:
      return "danger";
    default:
      return "secondary";
  }
};
