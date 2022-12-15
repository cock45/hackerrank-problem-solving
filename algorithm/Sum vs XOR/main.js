function sumXor(n) {
    let count = 0;

    while (n) {
        count += n % 2 ? 0 : 1;
        n = parseInt(n / 2);
    }

    return 2 ** count;
}
