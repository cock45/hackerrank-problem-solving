function catAndMouse(x, y, z) {
    const fromAtoC = Math.abs(x - z);
    const fromBtoC = Math.abs(y - z);

    if (fromAtoC > fromBtoC) {
        return 'Cat A';
    } 
    
    if (fromAtoC < fromBtoC) {
        return 'Cat B';
    } 

    return 'Mouse C';
}