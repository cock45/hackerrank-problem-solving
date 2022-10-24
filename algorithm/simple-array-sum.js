function simpleArraySum(ar) {
  // Write your code here
     
  return ar.reduce((total, value) => total + value, 0);
}