// O(n * m)
// n: j - i, m: j.toString().length

function beautifulDays(i, j, k) {
    // Write your code here
    const reverse = (num) => {
        let temp = num;
        let rev = 0;

        while (temp) {
            rev = rev * 10 + (temp % 10);
            temp = Math.floor(temp / 10);
        }

        return rev;
    };

    let count = 0;
    for (let d = i; d <= j; d++) {
        if (Math.abs(d - reverse(d)) % k === 0) {
            count++;
        }
    }

    return count;
}
