function dynamicArray(n, queries) {
  // Write your code here
  const arr = new Array(n).fill(null).map(() => []);
  const result = [];
  let lastAnswer = 0;

  for (const [sign, first, second] of queries) {
    const idx = (first ^ lastAnswer) % n;

    if (sign === 1) {
      arr[idx].push(second);
    } else {
      lastAnswer = arr[idx][second % arr[idx].length];
      result.push(lastAnswer);
    }
  }

  return result;
}
