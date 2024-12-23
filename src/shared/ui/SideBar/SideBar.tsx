import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import {
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";

export const SideBar = () => {
  return (
    <>
      <Box
        sx={{
          width: 260,
          height: "fit-content",
          borderRadius: "4px",
          backgroundColor: "white",
        }}
      >
        <Box sx={{ padding: "16px" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              paddingBottom: "8px",
              color: "grey.700",
            }}
          >
            Валюта
          </Typography>
          <ButtonGroup variant="outlined" aria-label="group">
            {["RUB", "USD", "EUR"].map((text) => (
              <Button
                value={text}
                key={text}
                color="secondary"
                variant={text === "RUB" ? "contained" : "outlined"}
                onClick={(e) => console.log(e.target)}
                sx={{ color: text === "RUB" ? "white" : "grey.700" }}
              >
                {text}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
        <FormControl component="fieldset" sx={{ padding: "16px" }}>
          <Typography
            sx={{
              textTransform: "uppercase",
              paddingBottom: "8px",
              color: "grey.700",
            }}
          >
            Колличество пересадок
          </Typography>
          <FormGroup aria-label="position" row>
            {[
              "Все",
              "Без пересадок",
              "1 пересадка",
              "2 пересадки",
              "3 пересадки",
            ].map((label) => (
              <FormControlLabel
                sx={{ color: "grey.700" }}
                key={label}
                value={label}
                control={<Checkbox color="secondary" />}
                label={label}
              />
            ))}
          </FormGroup>
        </FormControl>
      </Box>
    </>
  );
};
