// O(n * m)
// n: j - i, m: j.toString().length

function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;

    for (let d = i; d <= j; d++) {
        let rev = 0;

        for (let r = 0; r < d.toString().length; r++) {
            rev += d.toString()[r] * Math.pow(10, r);
        }

        if (Math.abs(d - rev) % k === 0) {
            count++;
        }
    }

    return count;
}
