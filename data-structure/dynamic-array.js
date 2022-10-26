function dynamicArray(n, queries) {
  // Write your code here
  const arr = new Array(n).fill(null).map(() => []);
  const result = [];
  let lastAnswer = 0;

  for (const [type, x, y] of queries) {
    const idx = (x ^ lastAnswer) % n;

    if (type === 1) {
      arr[idx].push(y);
    } else {
      lastAnswer = arr[idx][y % arr[idx].length];
      result.push(lastAnswer);
    }
  }

  return result;
}
