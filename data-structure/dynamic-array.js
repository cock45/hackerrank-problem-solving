function dynamicArray(n, queries) {
  // Write your code here
  const arr = new Array(n).fill("").map(() => new Array(0).fill(""));
  const result = [];
  let lastAnswer = 0;

  for (const element of queries) {
    const idx = (element[1] ^ lastAnswer) % n;

    if (element[0] == 1) {
      arr[idx].push(element[2]);
    } else {
      lastAnswer = arr[idx][element[2] % arr[idx].length];
      result.push(lastAnswer);
    }
  }

  return result;
}
