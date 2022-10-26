function miniMaxSum(arr) {
  // Write your code here
  const [sum, max, min] = arr.reduce(
    ([sum, max, min], value) => [
      sum + value,
      Math.max(max, value),
      Math.min(min, value),
    ],
    [0, arr[0], arr[0]]
  );

  console.log(sum - max, sum - min);
}
