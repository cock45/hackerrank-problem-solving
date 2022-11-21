// Time Complexity is O(nm|), n is length of width and m is length of cases.

function serviceLane(n, width, cases) {
    return cases.map(([entry, exit]) =>
        Math.min(...width.slice(entry, exit + 1))
    );
}
