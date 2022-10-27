function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  if (x1 === x2) {
    return "YES";
  }

  if ((x1 > x2 && v1 >= v2) || (x1 < x2 && v1 <= v2)) {
    return "NO";
  }

  return (x1 - x2) % (v1 - v2) === 0 ? "YES" : "NO";
}
