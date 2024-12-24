import { Dispatch, SetStateAction } from "react";

export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export type TicketsContextType = {
  ticketsResult: ITicket[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTicketsResult: Dispatch<SetStateAction<never[] | any>>;
};
