function dynamicArray(n, queries) {
  // Write your code here
  const arr = [];
  const result = [];
  let lastAnswer = 0;
  
  for(let ia = 0; ia < n; ia++) {
      arr[ia] = [];
  }
  
  for(let i = 0; i < queries.length; i++) {
      if(queries[i][0] == 1) {
          const idx = (queries[i][1] ^ lastAnswer) % n;
          arr[idx].push(queries[i][2]);
      } else {
          const idx = (queries[i][1] ^ lastAnswer) % n;
          lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
          result.push(lastAnswer);
      }
  }
  
  return result;
}