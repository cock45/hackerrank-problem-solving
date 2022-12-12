// O(|obstacles|)

function queensAttack(n, k, r_q, c_q, obstacles) {
    // Write your code here
    if (n < 2) {
        return 0;
    }

    const endpoints = [
        1, // directX, left
        n, // directX, right
        1, // directY, bottom
        n, // directY, top
        Math.max(1, 1 + r_q - c_q), // BottomToTop, bottom
        Math.min(n, n + r_q - c_q), // BottomToTop, top
        Math.max(1, r_q + c_q - n), // TopToBottom, bottom
        Math.min(n, r_q + c_q - 1), // TopToBottom, top
    ];

    if (obstacles.length === 0) {
        return endpoints.reduce(
            (total, value, index) => total - value * (index & 1 ? -1 : 1),
            0
        );
    }

    for (let obs of obstacles) {
        if (obs[0] === r_q && obs[1] < c_q && obs[1] > endpoints[0]) {
            endpoints[0] = obs[1] + 1;
        } else if (obs[0] === r_q && obs[1] > c_q && obs[1] < endpoints[1]) {
            endpoints[1] = obs[1] - 1;
        } else if (obs[1] === c_q && obs[0] < r_q && obs[0] > endpoints[2]) {
            endpoints[2] = obs[0] + 1;
        } else if (obs[1] === c_q && obs[0] > r_q && obs[0] < endpoints[3]) {
            endpoints[3] = obs[0] - 1;
        } else if (
            obs[0] === obs[1] + (r_q - c_q) &&
            obs[0] < r_q &&
            obs[0] > endpoints[4]
        ) {
            endpoints[4] = obs[0] + 1;
        } else if (
            obs[0] === obs[1] + (r_q - c_q) &&
            obs[0] > r_q &&
            obs[0] < endpoints[5]
        ) {
            endpoints[5] = obs[0] - 1;
        } else if (
            obs[0] === r_q + c_q - obs[1] &&
            obs[0] < r_q &&
            obs[0] > endpoints[6]
        ) {
            endpoints[6] = obs[0] + 1;
        } else if (
            obs[0] === r_q + c_q - obs[1] &&
            obs[0] > r_q &&
            obs[0] < endpoints[7]
        ) {
            endpoints[7] = obs[0] - 1;
        }
    }

    return endpoints.reduce(
        (total, value, index) => total - value * (index & 1 ? -1 : 1),
        0
    );
}
