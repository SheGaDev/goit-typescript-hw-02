/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURSDAY,
  SUNDAY,
}

const isWeekend = (day: Day): boolean => {
  return [Day.SATURSDAY, Day.SUNDAY].includes(day);
};

const message = (day: Day): void => {
  if (!isWeekend(day)) console.log("Is work day.");
  else console.log("Is weekend.");
};

message(Day.SATURSDAY);
message(Day.FRIDAY);
message(Day.MONDAY);
