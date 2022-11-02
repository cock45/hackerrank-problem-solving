// O(n); n: ranked.length

function climbingLeaderboard(ranked, player) {
    // Write your code here
    let newLen = 0;
    for (let i = 0; i < ranked.length; i++) {
        if (ranked[i] !== ranked[i + 1]) {
            ranked[newLen++] = ranked[i];
        }
    }
    ranked.splice(newLen);

    const ranking = new Array(player.length).fill(1);

    let k = ranked.length - 1,
        i = 0;

    while (i < player.length) {
        if (k < 0) {
            break;
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
