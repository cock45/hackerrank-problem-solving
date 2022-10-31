function catAndMouse(x, y, z) {
    const result = ['Cat A', 'Mouse C', 'Cat B'];
    const fromAtoC = Math.abs(x - z);
    const fromBtoC = Math.abs(y - z);

    if (fromAtoC > fromBtoC) {
        return 'Cat A';
    } else if (fromAtoC < fromBtoC) {
        return 'Cat B';
    } else {
        return 'Mouse C';
    }
}