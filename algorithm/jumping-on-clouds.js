function jumpingOnClouds(c, k) {
    let e = 100;

    for (let i = k; i > 0; i += k) {
        if (i >= c.length) {
            i = i % c.length;
        }

        e -= c[i] * 2 + 1;

        if (i === 0) {
            return e;
        }
    }
}
