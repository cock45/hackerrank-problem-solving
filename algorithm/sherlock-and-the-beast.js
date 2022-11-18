// Time Complexity is O(1)

function decentNumber(n) {
    const [d, r] = [Math.floor(n / 3), n % 3];

    if (n < 5 + 3 && n % 5 && n % 3) {
        console.log(-1);
    } else if (r === 0) {
        console.log("5".repeat(n));
    } else if (r === 1) {
        console.log("5".repeat(3 * (d - 3)) + "3".repeat(5 * 2));
    } else {
        console.log("5".repeat(3 * (d - 1)) + "3".repeat(5));
    }
}
