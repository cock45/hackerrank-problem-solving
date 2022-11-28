// Time Complexity is O(nm)
// Here n is length of arr
// And m is length of arr[i]

function gemstones(arr) {
    return new Array(26)
        .fill(null)
        .map((v, i) =>
            arr.every((rock) => rock.includes(String.fromCharCode(i + 0x61)))
        )
        .reduce((prev, cur) => prev + cur);
}
