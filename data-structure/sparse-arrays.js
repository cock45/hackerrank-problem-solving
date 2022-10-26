function matchingStrings(stringList, queries) {
  // Write your code here
  return queries.map(
    (query) => stringList.filter((str) => str === query).length
  );
}
