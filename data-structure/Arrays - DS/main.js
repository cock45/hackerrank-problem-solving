function reverseArray(a) {
  // Write your code here

  return a.map((value, index) => a[a.length - index - 1]);
  // const reversedArray = [];
  // for(let i = a.length - 1; i >= 0; i--) {
  //    reversedArray.push(a[i]);
  // };
  // return reversedArray;
}