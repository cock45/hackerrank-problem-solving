function timeConversion(s) {
  // Write your code here
  let [hour, min, sec] = s
    .slice(0, 8)
    .split(":")
    .map((value) => parseInt(value));

  hour %= 12;

  if (s.slice(8, s.length) === "PM") {
    hour += 12;
  }

  return [hour, min, sec]
    .map((value) => value.toString().padStart(2, "0"))
    .join(":");
}
