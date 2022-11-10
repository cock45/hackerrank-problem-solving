// O(n), n is length of arr

function workbook(n, k, arr) {
    let result = 0;
    let startPage = 1;
    const indices = [
        1,
        ...arr.map((value) => (startPage += Math.ceil(value / k))),
    ];

    for (let i = 0; i < indices.length - 1; i++) {
        let firstProblem = 1;
        for (let p = indices[i]; p < indices[i + 1]; p++) {
            if (p >= firstProblem && p < firstProblem + k && p <= arr[i]) {
                result++;
            }
            firstProblem += k;
        }
    }

    return result;
}
