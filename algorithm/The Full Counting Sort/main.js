// Time Complexity is O(n)
// Here n is length of arr

function countSort(arr) {
    const bucket = new Array(100).fill(null).map(() => []);

    for (let i = 0; i < arr.length; i++) {
        const [x, s] = arr[i];

        bucket[x].push(i < arr.length / 2 ? "-" : s);
    }

    console.log(bucket.flat().join(" "));
}
