function hurdleRace(k, height) {
    // Write your code here
    return Math.max(Math.max(...height) - k, 0);
}
