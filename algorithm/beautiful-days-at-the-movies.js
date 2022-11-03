// O(j - i)

function beautifulDays(i, j, k) {
    // Write your code here
    let result = 0;
    for (let day = i; day <= j; day++) {
        let reversedDay = 0;
        let curDay = day;
        while (curDay) {
            reversedDay = 10 * reversedDay + (curDay % 10);
            curDay = Math.floor(curDay / 10);
        }
        if (Math.abs(reversedDay - day) % k === 0) {
            result++;
        }
    }
    return result;
}
