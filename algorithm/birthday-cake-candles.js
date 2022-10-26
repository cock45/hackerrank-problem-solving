function birthdayCakeCandles(candles) {
  // Write your code here
  const tallest = Math.max(...candles);
  return candles.filter((value) => value === tallest).length;
}
