// O(1)

function taumBday(b, w, bc, wc, z) {
    // Write your code here
    if (bc + z < wc) {
        return BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(bc + z);
    } else if (wc + z < bc) {
        return BigInt(w) * BigInt(wc) + BigInt(b) * BigInt(wc + z);
    } else {
        return BigInt(b) * BigInt(bc) + BigInt(w) * BigInt(wc);
    }
}
