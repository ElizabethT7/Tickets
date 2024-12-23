import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const TicketsPageHeadRoot = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: "16px 0",

  [theme.breakpoints.up("sm")]: {
    padding: "64px 0",
  },
}));
