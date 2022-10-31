function breakingRecords(scores) {
  // Write your code here
  let records = [0, 0];
  let max = scores[0];
  let min = scores[0];

  for (let score of scores) {
      if (score > max) {
        max = score;
        records[0]++;
      }

      if (score < min) {
        min = score;
        records[1]++;
      }
  }
  
  return records;
}
