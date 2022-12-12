// O(lg n)

function findDigits(n) {
    // Write your code here
    let count = 0;
    let number = n;

    while (number) {
        const d = number % 10;
        if (n % d === 0) {
            count++;
        }

        number = Math.floor(number / 10);
    }

    return count;
}
