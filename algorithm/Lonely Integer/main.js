// O(n)

function lonelyinteger(a) {
    return (
        2 * Array.from(new Set(a).values()).reduce((prev, cur) => prev + cur) -
        a.reduce((prev, next) => prev + next, 0)
    );
}
