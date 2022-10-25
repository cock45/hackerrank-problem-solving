function hourglassSum(arr) {
  // Write your code here
  let max = -63;
  
  for (let i = 1; i < 5; i++) 
      for ( let j = 1; j < 5; j++) {
      let sum = arr[i - 1][j - 1] + arr[i - 1][j] + arr[i - 1][j + 1] + arr[i][j] + arr[i + 1][j - 1] + arr[i + 1][j] + arr[i + 1][j + 1];
      max = sum > max ? sum : max;
      }
  
  return max;
}