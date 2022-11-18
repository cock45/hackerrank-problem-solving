// Time Complexity is O(1)

function decentNumber(n) {
    const r = n % 3;

    if (n < 5 + 3 && n % 5 && n % 3) {
        console.log(-1);
    } else if (r === 0) {
        console.log("5".repeat(n));
    } else if (r === 1) {
        console.log("5".repeat(n - 10) + "3".repeat(5 * 2));
    } else {
        console.log("5".repeat(n - 5) + "3".repeat(5));
    }
}
