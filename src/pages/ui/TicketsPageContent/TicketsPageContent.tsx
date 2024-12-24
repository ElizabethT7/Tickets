import TicketsContextProvider from "../../../feature/ticketsContext";
import { SideBar } from "../../../shared/ui/SideBar";
import { TicketsList } from "../TicketsList";
import { TicketsPageContentRoot } from "./TicketsPageContent.styles";

export const TicketsPageContent = () => {
  return (
    <TicketsContextProvider>
      <TicketsPageContentRoot>
        <SideBar />
        <TicketsList />
      </TicketsPageContentRoot>
    </TicketsContextProvider>
  );
};
