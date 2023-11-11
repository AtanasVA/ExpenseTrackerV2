import { MONTHS } from "./months.constants";

export const getCurrentMonth = () => {
  return MONTHS[new Date().getMonth()];
};
