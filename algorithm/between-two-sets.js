function getTotalX(a, b) {
  // Write your code here
  let total = 0;

  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  const countOfFactors = (value) => {
    let count = 0;
    if (value === 1) return count;
    for (let i = 2; i <= value / 2; i++) {
      if (value % i === 0) {
        count++;
      }
    }
    return count + 1;
  };

  const lcmFactor = a.reduce((a, b) => lcm(a, b));
  const gcdFactor = b.reduce((a, b) => gcd(a, b));

  return gcdFactor % lcmFactor === 0
    ? countOfFactors(gcdFactor / lcmFactor) + 1
    : 0;
}
