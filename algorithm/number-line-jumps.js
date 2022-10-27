function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const dist = x1 - x2;
  const speed = v1 - v2;

  if (dist / speed < 0 && dist % speed === 0) {
    return "YES";
  } else {
    return "NO";
  }
}
