// O(n), n is length of arr

function workbook(n, k, arr) {
    let result = 0;
    let startPage = 1;

    for (let i = 0; i < arr.length; i++) {
        let firstProblem = 1;
        for (let p = startPage; p < startPage + arr[i]; p++) {
            if (p >= firstProblem && p < firstProblem + k && p <= arr[i]) {
                result++;
            }
            firstProblem += k;
        }
        startPage += Math.ceil(arr[i] / k);
    }

    return result;
}
