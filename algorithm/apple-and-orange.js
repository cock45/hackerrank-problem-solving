function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  console.log(
    apples.filter((apple) => apple + a >= s && apple + a <= t).length
  );
  console.log(
    oranges.filter((orange) => orange + b >= s && orange + b <= t).length
  );
}
