import { Box, Card } from "@mui/material";

import { styled } from "@mui/material/styles";

export const TicketCardRoot = styled(Card)(() => ({
  display: "flex",
  maxWidth: "945px",
  width: "100%",
  border: 1,
  borderColor: "grey.500",
}));

export const CardActionsContainer = styled(Box)(({ theme }) => ({
  borderRight: 1,
  borderColor: theme.palette.grey[300],
  paddingBottom: "16px",

  ".MuiSvgIcon-root": {
    width: "184px",
    height: "94px",
  },
}));
