// Time Complexity is O(nlogn)
// Here n is length of arr

function countSort(arr) {
    console.log(
        arr
            .reduce(
                (f, v, i) => (f[v[0]].push([v[1], i]), f),
                new Array(100).fill(null).map(() => [])
            )
            .sort((prev, cur) => prev[0] - cur[0])
            .map((sub) => sub.sort((prev, cur) => prev[0] - cur[0]))
            .flat(1)
            .map((value) => (value[1] < arr.length / 2 ? "-" : value[0]))
            .join(" ")
    );
}
