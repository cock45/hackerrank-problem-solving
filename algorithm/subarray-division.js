function birthday(s, d, m) {
  // Write your code here
  let count = 0;

  let sum = s.slice(0, m).reduce((prev, cur) => prev + cur);

  for (let i = m; i <= s.length; i++) {
    if (sum === d) {
      count++;
    }

    sum += s[i] - s[i - m];
  }

  return count;
}
