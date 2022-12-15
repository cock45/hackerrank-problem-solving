function sumXor(n) {
    return n === 0
        ? 1
        : 2 ** Array.from(n.toString(2)).filter((e) => e == 0).length;
}
