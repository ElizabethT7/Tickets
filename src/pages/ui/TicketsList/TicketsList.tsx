import { useContext } from "react";
import { TicketCard } from "../TicketCard/TickedCard";
import { TicketsListRoot } from "./TicketsList.styles";
import { TicketsContext } from "../../../feature/ticketsContext";

export const TicketsList = () => {
  const { ticketsResult } = useContext(TicketsContext);

  return (
    <TicketsListRoot>
      {ticketsResult.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
    </TicketsListRoot>
  );
};
