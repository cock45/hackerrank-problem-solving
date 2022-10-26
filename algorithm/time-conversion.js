function timeConversion(s) {
  // Write your code here
  let [hour, min, sec] = s.split(":").map((value) => parseInt(value));

  hour %= 12;

  if (s.indexOf("P") > -1) {
    hour += 12;
  }

  return [hour, min, sec]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}
