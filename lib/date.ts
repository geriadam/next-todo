import dayjs from "dayjs";

export function getCurrentWeekDates() {
  const startOfWeek = dayjs().startOf("week");
  return Array.from({ length: 7 }).map((_, i) =>
    startOfWeek.add(i, "day").format("DD MMMM YYYY")
  );
};