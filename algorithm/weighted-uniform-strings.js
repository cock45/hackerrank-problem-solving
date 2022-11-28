// Time Complexity is O(n|s|)
// Here n is length of queries

function weightedUniformStrings(s, queries) {
    const weights = new Array(s.length).fill(0);
    let curWeight = 0;

    for (let i = 0; i < s.length; i++) {
        const weight = s.charCodeAt(i) - 0x60;
        curWeight = i !== 0 && s[i] === s[i - 1] ? curWeight + weight : weight;
        weights[i] = curWeight;
    }

    return queries.map((query) => (weights.indexOf(query) > -1 ? "Yes" : "No"));
}
