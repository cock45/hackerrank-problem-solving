// O(1)

function howManyGames(p, d, m, s) {
    // Return the number of games you can buy
    let count = 0;

    while (s >= p) {
        s -= p;
        p = p > m + d ? p - d : m;
        count++;
    }

    return count;
}
