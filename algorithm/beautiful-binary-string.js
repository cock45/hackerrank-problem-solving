// Time Complexity is O(|b|)

function beautifulBinaryString(b) {
    return (b.split("010").length - 1) | 0;
}
