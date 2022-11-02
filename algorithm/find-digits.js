function findDigits(n) {
    // Write your code here
    let count = 0;
    let nToStr = n.toString();

    for (let i = 0; i < nToStr.length; i++) {
        if (n % nToStr[i] === 0) {
            count++;
        }
    }

    return count;
}
