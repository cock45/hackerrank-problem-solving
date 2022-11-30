// Time Complexity is O(|b|)

function beautifulBinaryString(b) {
    return [...b.matchAll("010")].length;
}
