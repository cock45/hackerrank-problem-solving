// O(lg(b + w + bc + wc + z))

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    return (
        BigInt(b) * (bc < wc + z ? BigInt(bc) : BigInt(wc + z)) +
        BigInt(w) * (wc < bc + z ? BigInt(wc) : BigInt(bc + z))
    );
}
