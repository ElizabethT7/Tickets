import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TicketsPageContentRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "16px",

  [theme.breakpoints.up("sm")]: {
    gap: "24px",
  },
}));
