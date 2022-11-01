function utopianTree(n) {
    let height = 0;

    for (let cycle = 0; cycle <= n; cycle++) {
        if (cycle % 2 === 0) {
            height++;
        } else {
            height = 2 * height;
        }
    }

    return height;
}
