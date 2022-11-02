function climbingLeaderboard(ranked, player) {
    // Write your code here
    for (let i = 1; i < ranked.length; i++) {
        if (ranked[i] === ranked[i - 1]) {
            ranked.splice(i, 1);
            i--;
        }
    }

    let pos = ranked.length;
    const ranking = [];

    for (let p = 0; p < player.length; p++) {
        for (let i = pos - 1; i >= 0; i--) {
            if (ranked[i] > player[p]) {
                pos = i + 1;
                ranking.push(pos + 1);
                break;
            }

            if (player[p] >= ranked[0]) {
                pos = 1;
                ranking.push(pos);
                break;
            }
        }
    }

    return ranking;
}
