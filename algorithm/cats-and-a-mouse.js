function catAndMouse(x, y, z) {
    const result = ['Cat A', 'Mouse C', 'Cat B'];
    const fromAtoC = Math.abs(x - z);
    const fromBtoC = Math.abs(y - z);

    return result[Math.sign(fromAtoC - fromBtoC) + 1];
}