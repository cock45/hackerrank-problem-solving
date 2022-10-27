function getTotalX(a, b) {
  // Write your code here
  const gcd = (a, b) => (!b ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const lcmA = a.reduce((prev, cur) => lcm(prev, cur));
  const gcdB = b.reduce((prev, cur) => gcd(prev, cur));

  if (gcdB % lcmA !== 0) {
    return 0;
  }

  const num = gcdB / lcmA;
  let count = 1;
  for (let i = 1; 2 * i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count;
}
