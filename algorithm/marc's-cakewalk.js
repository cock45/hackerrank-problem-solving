function marcsCakewalk(calorie) {
    calorie.sort((a, b) => b - a);

    let miles = 0n,
        times = 1n;

    for (const value of calorie) {
        miles += BigInt(value) * times;
        times *= 2n;
    }

    return miles;
}
