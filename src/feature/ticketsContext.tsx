import { createContext, useState } from "react";
import { TicketsContextType } from "../types";

export const TicketsContext = createContext<TicketsContextType>({
  ticketsResult: [],
  setTicketsResult: () => [],
});

export default function TicketsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ticketsResult, setTicketsResult] = useState([]);

  const quizState: TicketsContextType = {
    ticketsResult,
    setTicketsResult,
  };

  return (
    <TicketsContext.Provider value={quizState}>
      {children}
    </TicketsContext.Provider>
  );
}
