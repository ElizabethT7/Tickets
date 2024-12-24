import { ITicket } from "../types";

export const useSort = (filteredData: ITicket[]) => {
  return filteredData.sort((a, b) => a.price - b.price);
};
