// O(|c|)

function pokerNim(k, c) {
    return c.reduce((a, v) => a ^ v, 0) ? "First" : "Second";
}
