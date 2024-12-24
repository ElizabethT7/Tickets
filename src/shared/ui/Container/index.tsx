import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  maxWidth: "1920px",
  margin: "0 auto",
  padding: "0 16px",
  backgroundColor: theme.palette.grey[100],

  [theme.breakpoints.up("sm")]: {
    padding: "0 64px",
  },
}));
