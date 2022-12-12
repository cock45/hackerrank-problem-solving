function migratoryBirds(arr) {
  // Write your code here
  const frequencies = arr.reduce((freq, bird) => {
    return ++freq[bird - 1], freq;
  }, Array(5).fill(0));

  return frequencies.indexOf(Math.max(...frequencies)) + 1;
}
