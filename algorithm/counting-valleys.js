function countingValleys(steps, path) {
    // Write your code here
    let position = 0;

    const count = path.split('').reduce((count, step) => {
        if (step === 'U') {
            position++;
        } else {
            position--;
        }

        if (step === 'U' && position === 0) {
            count++;
        }

        return count;
    }, 0);

    return count;
}
