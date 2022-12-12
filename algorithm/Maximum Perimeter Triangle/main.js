// O(n)

function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => b - a);
    for (let i = 0; i < sticks.length - 2; i++) {
        const [a, b, c] = [sticks[i], sticks[i + 1], sticks[i + 2]];
        if (a < b + c) {
            return [c, b, a];
        }
    }

    return [-1];
}
