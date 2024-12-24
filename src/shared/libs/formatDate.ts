import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDate = (date: string) => {
  const dateFormatted = new Date(
    +date.slice(-2),
    +date.slice(-5, -2) - 1,
    +date.slice(0, 2)
  );

  const formattedDate = format(dateFormatted, "d MMM yyyy", {
    locale: ru,
  }).replace(".", "");

  const formattedDay = format(dateFormatted, "iiiiii", {
    locale: ru,
  });

  return (
    formattedDate +
    ", " +
    formattedDay.charAt(0).toUpperCase() +
    formattedDay.slice(1)
  );
};
