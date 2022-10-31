function countingValleys(steps, path) {
    // Write your code here
    let position = 0;
    let count = 0;

    for (let step of path.split("")) {
        if (step === 'U') {
            position++;
        } else {
            position--;
        }

        if (step === 'U' && position === 0) {
            count++;
        }
    }

    return count;
}
