function minimumAbsoluteDifference(arr) {
    return arr
        .sort((a, b) => a - b)
        .slice(1)
        .reduce(
            (min, el, i) => (el - arr[i] < min ? el - arr[i] : min),
            Infinity
        );
}
