function breakingRecords(scores) {
  // Write your code here
  let max = scores[0];
  let min = scores[0];

  return scores.reduce(
    (records, value) => {
      if (value > max) {
        max = value;
        records[0]++;
      }

      if (value < min) {
        min = value;
        records[1]++;
      }

      return records;
    },
    [0, 0]
  );
}
