const totalDays = (start, end) => {
  let day = 24 * 60 * 60 * 1000;
  let milliseconds = end.getTime() - start.getTime();
  return milliseconds / day;
};
const start = new Date("2020-01-01");
const end = new Date("2020-01-22");

console.log(totalDays(start, end));
