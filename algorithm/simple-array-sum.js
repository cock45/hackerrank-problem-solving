function simpleArraySum(ar) {
  // Write your code here
     
  return ar.reduce((total, value) => {
      return total + value;
  }, 0);
}