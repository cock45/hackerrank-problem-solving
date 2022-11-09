// O(q - p)

function kaprekarNumbers(p, q) {
    // Write your code here
    let result = [];
    const d = Math.pow(10, Math.floor(Math.log10(p)) + 1);

    for (let i = p; i <= q; i++) {
        if (i >= d) {
            d *= 10;
        }

        const square = i * i;

        if (i === Math.floor(square / d) + (square % d)) {
            result.push(i);
        }
    }

    console.log(result.join(' ') || 'INVALID RANGE');
}
