// O(n), n is length of c

function flatlandSpaceStations(n, c) {
    c.sort((a, b) => a - b);

    const space = [-c[0], ...c, 2 * (n - 1) - c.at(-1)];

    let max = 0;

    for (let i = 1; i < space.length; i++) {
        const dist = Math.floor((space[i] - space[i - 1]) / 2);
        if (dist > max) {
            max = dist;
        }
    }

    return max;
}
