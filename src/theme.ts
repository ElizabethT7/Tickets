import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#f69800",
    },
    secondary: {
      main: "#39B4E8",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
