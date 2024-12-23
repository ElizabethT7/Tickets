import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TicketsListRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "16px",

  [theme.breakpoints.up("sm")]: {
    gap: "36px",
  },
}));
