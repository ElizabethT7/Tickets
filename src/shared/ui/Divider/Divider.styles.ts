import { styled } from "@mui/material/styles";

export const DividerRoot = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[400],
}));

export const DividerLine = styled("div")(({ theme }) => ({
  height: "1px",
  width: "100%",
  minWidth: "100px",
  backgroundColor: theme.palette.grey[400],
}));
