function simpleArraySum(ar) {
  // Write your code here
  if(ar.length == 0) return 0;
  
  let sum = numbers.reduce((total, value) => {
    return total + value;
  }, 0);
  
  return sum;
}