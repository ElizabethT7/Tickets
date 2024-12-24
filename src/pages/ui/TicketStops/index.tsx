import { Box, Typography } from "@mui/material";
import { Divider } from "../../../shared/ui/Divider";
import { plural } from "../../../shared/ui/libs/plural";

export const TicketStops = ({ stops }: { stops: number }) => {
  return (
    <Box>
      <Typography
        component="div"
        variant="caption"
        color="grey.500"
        sx={{ textTransform: "uppercase", textAlign: "center" }}
      >
        {stops > 0 ? (
          <span>
            {stops}{" "}
            {plural(stops, {
              one: "пересадка",
              few: "пересадки",
              many: "пересадок",
            })}
          </span>
        ) : (
          <span> Без пересадок</span>
        )}
      </Typography>
      <Divider />
    </Box>
  );
};
