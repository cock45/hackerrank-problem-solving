function climbingLeaderboard(ranked, player) {
    // Write your code here
    const scores = [...ranked, ...player].sort((prev, cur) => cur - prev);

    let prev = 0;
    const fixedRank = [];

    for (let score of scores) {
        if (score !== prev) {
            prev = score;
            fixedRank.push(score);
        }
    }

    let prevScore = player[player.length - 1];
    let count = 0;

    const ranking = player.reverse().map((value) => {
        if (value !== prevScore && ranked.indexOf(prevScore) === -1) {
            count++;
        }
        const rank = fixedRank.indexOf(value) + 1 - count;

        prevScore = value;

        return rank;
    });

    return ranking.reverse();
}
