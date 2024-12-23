import { Box, Typography } from "@mui/material";

export const TicketInfo = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <Box>
      <Typography gutterBottom variant="body1" component="p" color="grey.800">
        {title}
      </Typography>
      <Typography gutterBottom variant="caption" component="p" color="grey.500">
        {date}
      </Typography>
    </Box>
  );
};
