// O(n)
// Here n is 10 000

function toys(w) {
    const vst = new Array(10001).fill(0);

    for (const weight of w) {
        vst[weight] = true;
    }

    let lower = 0,
        count = 0;

    while (true) {
        lower = vst.indexOf(true, lower) + 5;

        if (lower < 5) {
            break;
        }

        count++;
    }

    return count;
}
