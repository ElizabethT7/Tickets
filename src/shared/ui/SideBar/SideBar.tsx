import Box from "@mui/material/Box";

import Button from "@mui/material/Button";

import {
  ButtonGroup,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import { stopsFilters } from "../../../feature/filters.utils";
import { useFilters } from "../../../feature/useFilters";
import { SideBarRoot, SideBarTitle } from "./SideBar.styles";

export const SideBar = () => {
  const [currency, setCurrency] = useState("RUB");
  const { onStopsFiltersChange } = useFilters();

  return (
    <SideBarRoot>
      <Box padding="16px">
        <SideBarTitle>Валюта</SideBarTitle>
        <ButtonGroup variant="outlined" aria-label="currency group">
          {["RUB", "USD", "EUR"].map((text) => (
            <Button
              value={text}
              key={text}
              color="secondary"
              variant={text === currency ? "contained" : "outlined"}
              onClick={() => setCurrency("RUB")}
              sx={{ color: text === currency ? "white" : "grey.700" }}
            >
              {text}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
      <FormControl component="fieldset" sx={{ padding: "16px" }}>
        <SideBarTitle>Колличество пересадок</SideBarTitle>
        <FormGroup aria-label="position" row>
          {stopsFilters.map(({ value, label }) => (
            <FormControlLabel
              sx={{ color: "grey.700" }}
              key={value}
              value={value}
              control={
                <Checkbox
                  name={value}
                  color="secondary"
                  onChange={onStopsFiltersChange}
                />
              }
              label={label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </SideBarRoot>
  );
};
