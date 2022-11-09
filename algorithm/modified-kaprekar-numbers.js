// O(n), n is q - p

function kaprekarNumbers(p, q) {
    // Write your code here
    let result = [];
    const d = Math.floor(Math.log10(p)) + 1;
    let divider = Math.pow(10, d);

    for (let i = p; i <= q; i++) {
        if (i >= divider) {
            divider *= 10;
        }

        const r = (i * i) % divider;
        const l = (i * i - r) / divider;

        if (r + l === i) {
            result.push(i);
        }
    }

    if (result.length === 0) {
        console.log('INVALID RANGE');
    } else {
        console.log(result.join(' '));
    }
}
