function extraLongFactorials(n) {
    // Write your code here
    const longMultiplication = (n) => {
        if (n === 1) {
            return BigInt(1);
        }

        return BigInt(n) * BigInt(longMultiplication(n - 1));
    };

    console.log(longMultiplication(n).toString());
}
