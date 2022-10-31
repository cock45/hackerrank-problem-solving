function hurdleRace(k, height) {
    // Write your code here
    const doses = Math.max(...height) - k;

    return doses > 0 ? doses : 0;
}
