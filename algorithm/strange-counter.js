// log(t)

function strangeCounter(t) {
    // Write your code here
    let startNum = 3;
    let index = t;

    while (index > startNum) {
        index -= startNum;
        startNum *= 2;
    }

    return startNum - index + 1;
}
