function reverseArray(a) {
  // Write your code here
  var reversedArray = [];
  for(var i = a.length - 1; i >= 0; i--) {
     reversedArray.push(a[i]);
  };
  return reversedArray;
}