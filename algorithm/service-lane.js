// Time Complexity is O(nm|), n is length of width and m is length of cases.

function serviceLane(n, width, cases) {
    const result = cases.map((section) => {
        let min = 3;
        for (let i = section[0]; i <= section[1]; i++) {
            if (width[i] < min) {
                min = width[i];
            }
        }
        return min;
    });

    return result;
}
