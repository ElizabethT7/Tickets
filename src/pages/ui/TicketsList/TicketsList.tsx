import data from "../../../assets/tickets.json";
import { TicketCard } from "../TicketCard/TickedCard";
import { TicketsListRoot } from "./TicketsList.styles";

export const TicketsList = () => {
  const tickets = data.tickets;
  return (
    <TicketsListRoot>
      {tickets.map((ticket, index) => (
        <TicketCard key={index} ticket={ticket} />
      ))}
    </TicketsListRoot>
  );
};
