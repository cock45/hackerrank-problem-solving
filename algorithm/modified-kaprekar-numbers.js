// O(n * lg(n))

function kaprekarNumbers(p, q) {
    // Write your code here
    let result = [];

    for (let i = p; i <= q; i++) {
        const square = i * i;
        let l = i * i,
            d = 1;

        while (l > i) {
            d *= 10;
            l /= d;
        }

        const r = square % d;
        l = (square - r) / d;

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
