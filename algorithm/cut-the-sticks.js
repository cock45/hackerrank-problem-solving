// O(|arr|)

function cutTheSticks(arr) {
    // Write your code here
    arr.sort((a, b) => a - b);
    const result = [arr.length];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            result.push(arr.length - i);
        }
    }

    return result;
}
