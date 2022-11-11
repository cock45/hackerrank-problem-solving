// O(∑(arr) / k)

function workbook(n, k, arr) {
    let result = 0;
    let startPage = 1;

    for (let i = 0; i < arr.length; i++) {
        let firstProblem = 1;
        const numberOfPages = Math.ceil(arr[i] / k);
        for (let p = startPage; p < startPage + numberOfPages; p++) {
            if (p >= firstProblem && p < firstProblem + k && p <= arr[i]) {
                result++;
            }
            firstProblem += k;
        }
        startPage += numberOfPages;
    }

    return result;
}
