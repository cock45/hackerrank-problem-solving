// O(n * lg(n))

function kaprekarNumbers(p, q) {
    // Write your code here
    let result = [];

    for (let i = p; i <= q; i++) {
        let number = i;
        let d = 0;

        while (number >= 1) {
            number /= 10;
            d++;
        }

        const r = (i * i) % Math.pow(10, d);
        const l = (i * i - r) / Math.pow(10, d);

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
