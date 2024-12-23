import { SideBar } from "../../../shared/ui/SideBar/SideBar";
import { TicketsList } from "../TicketsList";
import { TicketsPageContentRoot } from "./TicketsPageContent.styles";

export const TicketsPageContent = () => {
  return (
    <TicketsPageContentRoot>
      <SideBar />
      <TicketsList />
    </TicketsPageContentRoot>
  );
};
