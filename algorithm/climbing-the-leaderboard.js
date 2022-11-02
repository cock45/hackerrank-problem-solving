// O(n); n: ranked.length

function climbingLeaderboard(ranked, player) {
    // Write your code here
    for (let i = 1; i < ranked.length; i++) {
        if (ranked[i] === ranked[i - 1]) {
            ranked.splice(i, 1);
            i--;
        }
    }

    const ranking = [];

    for (let p = 0; p < ranked.length; p++) {
        if (player[player.length - ranking.length - 1] >= ranked[p]) {
            ranking.push(p + 1);
            p--;
        }
    }

    const rest = new Array(player.length - ranking.length).fill(
        ranked.length + 1
    );

    return ranking.concat(rest).reverse();
}
