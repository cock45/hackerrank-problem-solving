// O(log t)

function strangeCounter(t) {
    // Write your code here
    let startNum = 3;
    let time = t;

    while (time > startNum) {
        time -= startNum;
        startNum *= 2;
    }

    return startNum - time + 1;
}
