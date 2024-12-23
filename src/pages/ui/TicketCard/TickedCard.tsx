import {
  Box,
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { ITicket } from "../../../types";
import { TyrkishAirlinesIcon } from "../../../shared/ui/SVGIcons";
import { TicketCardRoot } from "./TicketCard.styles";
import { TicketInfo } from "../TicketInfo/TicketInfo";

import { TicketStops } from "../TicketStops/TicketStops";

export const TicketCard = ({ ticket }: { ticket: ITicket }) => {
  return (
    <TicketCardRoot>
      <Box
        sx={{
          borderRight: 1,
          borderColor: "grey.300",
          paddingBottom: "16px",

          ".MuiSvgIcon-root": {
            width: "184px",
            height: "94px",
          },
        }}
      >
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
      </Box>
      <CardContent>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "6px",
          }}
        >
          <Typography gutterBottom variant="h3" component="p">
            {ticket.departure_time}
          </Typography>

          <TicketStops stops={ticket.stops} />

          <Typography gutterBottom variant="h3" component="p">
            {ticket.arrival_time}
          </Typography>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "space-between", gap: "16px" }}
        >
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
