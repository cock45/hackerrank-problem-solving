function miniMaxSum(arr) {
  // Write your code here
  const sum = arr.reduce((total, value) => total + value, 0);
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  console.log(sum - max, sum - min);
}
