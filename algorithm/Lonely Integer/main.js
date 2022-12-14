// O(n)

function lonelyinteger(a) {
    return a
        .reduce(
            (vst, v) => ((vst[v] = !vst[v]), vst),
            new Array(101).fill(false)
        )
        .indexOf(true);
}
