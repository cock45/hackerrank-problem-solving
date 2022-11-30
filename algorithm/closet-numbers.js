// Time Complexity is O(nlogn)
// Here n is length of arr

function closestNumbers(arr) {
    arr.sort((a, b) => a - b);

    const minDiff = Math.min(...arr.slice(1).map((v, i) => v - arr[i]));

    return arr
        .slice(1)
        .map((v, i) => (v - arr[i] === minDiff ? [arr[i], v] : []))
        .flat();
}
