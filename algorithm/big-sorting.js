// Time Complexity is O(nlogn)

function bigSorting(unsorted) {
    return unsorted.sort((a, b) =>
        a.length !== b.length ? a.length - b.length : a < b ? -1 : 1
    );
}
