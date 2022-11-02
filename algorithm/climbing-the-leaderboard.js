// O(n); n: ranked.length

function climbingLeaderboard(ranked, player) {
    // Write your code here
    for (let i = 1; i < ranked.length; i++) {
        if (ranked[i] === ranked[i - 1]) {
            ranked.splice(i, 1);
            i--;
        }
    }

    const ranking = new Array(player.length).fill(1);

    let k = ranked.length - 1,
        i = 0;

    while (i < player.length) {
        if (k < 0) {
            return ranking;
        } else if (ranked[k] === player[i]) {
            ranking[i++] = k + 1;
        } else if (ranked[k] > player[i]) {
            ranking[i++] = k + 2;
        } else {
            k--;
        }
    }

    return ranking;
}
