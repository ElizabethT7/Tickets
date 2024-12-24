import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SideBarRoot = styled(Box)(() => ({
  width: 260,
  height: "fit-content",
  borderRadius: "4px",
  backgroundColor: "white",
}));

export const SideBarTitle = styled(Typography)(({ theme }) => ({
  textTransform: "uppercase",
  paddingBottom: "8px",
  color: theme.palette.grey[700],
}));
