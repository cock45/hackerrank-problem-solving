function balancedSums(arr) {
    let leftSum = 0,
        rightSum = arr.reduce((prev, cur) => prev + cur);

    for (const value of arr) {
        rightSum -= value;

        if (leftSum === rightSum) {
            return "YES";
        }

        leftSum += value;
    }

    return "NO";
}
