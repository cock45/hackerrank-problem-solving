// O(|arr|)

function equalizeArray(arr) {
    // Write your code here
    if (arr.length === 1) {
        return 0;
    }

    const frequency = new Array(100).fill(0);

    for (let i = 0; i < arr.length; i++) {
        frequency[arr[i] - 1]++;
    }

    return arr.length - Math.max(...frequency);
}
