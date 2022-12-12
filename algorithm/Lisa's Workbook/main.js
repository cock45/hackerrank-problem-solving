// O(∑(arr) / k)

function workbook(n, k, arr) {
    let result = 0;
    let page = 1;

    for (let i = 0; i < n; i++) {
        let startProblem = 1;
        const numberOfPages = Math.ceil(arr[i] / k);
        while (numberOfPages--) {
            if (
                page >= startProblem &&
                page < startProblem + k &&
                page <= arr[i]
            ) {
                result++;
            }
            startProblem += k;
            page++;
        }
    }

    return result;
}
