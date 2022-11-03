// O(n)

function extraLongFactorials(n) {
    // Write your code here
    let factorial = BigInt(1);

    for (let i = 1; i <= n; i++) {
        factorial *= BigInt(i);
    }

    console.log(factorial.toString());
}
