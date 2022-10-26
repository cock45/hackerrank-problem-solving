function rotateLeft(d, arr) {
  // Write your code here
  return arr.map((value, index) => arr[(index + d) % arr.length]);
}