function simpleArraySum(ar) {
  // Write your code here
  ar.reduce((total, value) => {
      return total + value;
  });
}