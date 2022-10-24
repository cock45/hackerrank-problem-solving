function simpleArraySum(ar) {
  // Write your code here
  var sum = 0;
  ar.forEach((value, index, array) => {
      sum += value;
  });
  
  return sum;
}