function plusMinus(arr) {
  // Write your code here
  console.log(
    [1, -1, 0]
      .map(
        (sign) =>
          arr.filter((value) => Math.sign(value) === sign).length / arr.length
      )
      .join("\n")
  );
}

// function plusMinus(arr) {
//   // Write your code here
//   const result = [0, 0, 0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       result[0]++;
//     } else if (arr[i] < 0) {
//       result[1]++;
//     } else {
//       result[2]++;
//     }
//   }

//   result.forEach((value) => console.log(value / arr.length));
// }
