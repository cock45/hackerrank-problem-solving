function aVeryBigSum(ar) {
  // Write your code here

  // return ar.reduce((total, value) => BigInt(total) + BigInt(value), 0);

  let longNumber = "";
  let shortNumber = "";
  let diff = 0;
  let carry = 0;
  
  function findSum(total, value) {
      const valueToStr = value.toString();
      let sum = "";
      
      if(total.length >= valueToStr.length) {
        longNumber = total;
        shortNumber = valueToStr;
      } else {
        longNumber = valueToStr;
        shortNumber = total;
      }
      
      diff = longNumber.length - shortNumber.length;
      
      for(let i = longNumber.length - 1; i >= 0; i--) {
        let temp = Number(longNumber.charAt(i)) + Number(shortNumber.charAt(i - diff)) + carry;

        if(temp > 9) {
          sum = temp % 10 + sum;
          carry = 1;
        } else {
          sum = temp + sum;
          carry = 0;
        }
      }
      
      if(carry > 0) {
        sum = carry + sum;
      }
      
      return sum;
  }
  
  return ar.reduce(findSum, "");
}