function pageCount(n, p) {
  // Write your code here
  return Math.min(Math.floor(p / 2), Math.floor((n - p + ((n - 1) % 2)) / 2))
}
