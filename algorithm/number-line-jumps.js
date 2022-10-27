function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  const dx = x1 - x2;
  const dv = v1 - v2;

  return dx / dv < 0 && dx % dv === 0 ? "YES" : "NO";
}
