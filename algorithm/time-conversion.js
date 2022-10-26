function timeConversion(s) {
  // Write your code here
  let [hour, min, sec] = s.split(":");

  if (sec.indexOf("P") > -1) {
    hour = (parseInt(hour) % 12) + 12;
  } else if (hour === "12") {
    hour = "00";
  }

  sec = parseInt(sec).toString().padStart(2, "0");

  return [hour, min, sec].join(":");
}
