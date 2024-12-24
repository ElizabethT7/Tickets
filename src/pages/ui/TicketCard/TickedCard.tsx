import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ITicket } from "../../../types";
import { TyrkishAirlinesIcon } from "../../../shared/ui/SVGIcons";
import { CardActionsContainer, TicketCardRoot } from "./TicketCard.styles";
import { TicketInfo } from "../TicketInfo";

import { TicketStops } from "../TicketStops";
import { formatTime } from "../../../shared/libs/formatTime";

export const TicketCard = ({ ticket }: { ticket: ITicket }) => {
  return (
    <TicketCardRoot>
      <CardActionsContainer>
        <TyrkishAirlinesIcon />
        <CardActions sx={{ padding: "16px" }}>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            sx={{ color: "white", textTransform: "none" }}
          >
            Купить <br />
            за {ticket.price} ₽
          </Button>
        </CardActions>
      </CardActionsContainer>
      <CardContent>
        <Box width="100%" display="flex" gap="6px">
          <Typography variant="h3" component="p">
            {formatTime(ticket.departure_time)}
          </Typography>

          <TicketStops stops={ticket.stops} />

          <Typography variant="h3" component="p">
            {formatTime(ticket.arrival_time)}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" gap="16px">
          <TicketInfo
            title={`${ticket.origin}, ${ticket.origin_name}`}
            date={ticket.departure_date}
          />
          <TicketInfo
            title={`${ticket.destination_name}, ${ticket.destination}`}
            date={ticket.arrival_date}
          />
        </Box>
      </CardContent>
    </TicketCardRoot>
  );
};
