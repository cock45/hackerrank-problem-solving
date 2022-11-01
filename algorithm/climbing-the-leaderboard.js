function climbingLeaderboard(ranked, player) {
    // Write your code here
    const fixedRank = [];

    for (let cur in ranked) {
        if (ranked[cur] !== ranked[cur - 1]) {
            fixedRank.push(ranked[cur]);
        }
    }

    let pos = fixedRank.length;

    const ranking = player.map((value) => {
        for (let i = pos - 1; i >= 0; i--) {
            if (fixedRank[i] > value) {
                pos = i + 1;
                return pos + 1;
            }

            if (value >= fixedRank[0]) {
                pos = 1;
                return pos;
            }
        }
    });

    return ranking;
}
