function diagonalDifference(arr) {
  // Write your code here
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i][i] - arr[i][arr.length - i - 1];
  }

  return Math.abs(result);
}
