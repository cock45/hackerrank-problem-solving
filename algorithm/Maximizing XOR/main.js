// O(1)

function maximizingXor(l, r) {
    return (1 << (Math.log2(l ^ r) + 1)) - 1;
}
