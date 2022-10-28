function dayOfProgrammer(year) {
  // Write your code here
  const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const isLeap = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? true
      : false;
  };

  if ((year < 1918 && year % 4 === 0) || (year >= 1918 && isLeap(year))) {
    daysOfMonths[1] = 29;
  }

  if (year === 1918) {
    daysOfMonths[1] = 15;
  }

  let [dd, mm, yy] = [256, 1, year];

  while (dd > daysOfMonths[mm - 1]) {
    dd -= daysOfMonths[mm - 1];
    mm++;
  }

  return [dd, mm, yy]
    .map((value) => value.toString().padStart(2, "0"))
    .join(".");
}
