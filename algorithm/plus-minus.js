function plusMinus(arr) {
  // Write your code here
  const result = [0, 0, 0];
  
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] > 0) {
          result[0]++;
      } else if (arr[i] < 0) {
          result[1]++;
      } else {
          result[2]++;
      }
  }
  
  result.map(value => console.log((value / arr.length).toFixed(6)));
}