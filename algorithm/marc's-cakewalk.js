function marcsCakewalk(calorie) {
    return calorie
        .sort((a, b) => b - a)
        .reduce((sum, e, i) => sum + 2n ** BigInt(i) * BigInt(e), BigInt(0));
}
