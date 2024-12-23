import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import theme from "./theme";
import { Tickets } from "./pages/Tickets";
import { Container } from "./shared/ui/Container";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Tickets />
      </Container>
    </ThemeProvider>
  );
}

export default App;
