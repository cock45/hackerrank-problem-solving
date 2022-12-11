function luckBalance(k, contests) {
    let count = 0,
        sum = 0;
    contests.sort(([a], [b]) => b - a);

    for (const [luck, importance] of contests) {
        if (importance === 1) {
            count++;
        }
        sum += count > k && importance === 1 ? -luck : luck;
    }

    return sum;
}
