function countingValleys(steps, path) {
    // Write your code here
    let number = 0;
    let position = 0;

    for (let i = 0; i < steps; i++) {
        if (path.charAt(i) === 'U') {
            position++;

            if (position === 0) {
                number++;
            }
        } else {
            position--;
        }
    }

    return number;
}
