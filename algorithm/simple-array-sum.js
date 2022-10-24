function simpleArraySum(ar) {
  // Write your code here
  if(ar.length == 0) return 0;
  
  let sum = ar.reduce((total, value) => {
      return total + value;
  });
  
  return sum;
}