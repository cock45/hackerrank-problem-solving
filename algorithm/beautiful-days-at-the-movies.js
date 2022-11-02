function beautifulDays(i, j, k) {
    // Write your code here
    let count = 0;

    for (let d = i; d <= j; d++) {
        const reverseD = d.toString().split('').reverse().join('');

        if (Math.abs(d - reverseD) % k === 0) {
            count++;
        }
    }

    return count;
}
