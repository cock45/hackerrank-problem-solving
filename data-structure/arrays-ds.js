function reverseArray(a) {
  // Write your code here
  const reversedArray = [];
  for(let i = a.length - 1; i >= 0; i--) {
     reversedArray.push(a[i]);
  };
  return reversedArray;
}