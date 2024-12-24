import { useEffect, useMemo, useState } from "react";
import data from "../assets/tickets.json";
import { useSort } from "./useSort";
import { useContext } from "react";
import { TicketsContext } from "./ticketsContext";

export const useFilters = () => {
  const [stopsValue, setStopsValue] = useState<string[]>([]);
  const { setTicketsResult } = useContext(TicketsContext);
  const filteredData = data.tickets;

  const onStopsFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const values = stopsValue;
    if (event.target.checked) {
      values.push(event.target.name);
      setStopsValue([...values]);
    } else {
      setStopsValue(values.filter((value) => value !== event.target.name));
    }
  };

  const stopsFilteredData = useMemo(() => {
    const newData = filteredData.filter((ticket) => {
      return stopsValue?.some((value) => {
        if (value === "all") return true;
        return value === ticket.stops.toString();
      });
    });

    return newData.length > 0 ? newData : filteredData;
  }, [stopsValue]);

  const tickets = useSort(stopsFilteredData);

  useEffect(() => {
    setTicketsResult(tickets);
  }, [tickets]);

  return {
    filteredData: stopsFilteredData,
    onStopsFiltersChange,
  };
};
