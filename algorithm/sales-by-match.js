function sockMerchant(n, ar) {
    // Write your code here
    const frequences = ar.reduce((freq, value) => (++freq[value - 1], freq), new Array(100).fill(0));

    return frequences.reduce((count, value) => count += parseInt(value / 2), 0);
}