function chessboardGame(x, y) {
    return !((x % 4) % 3) || !((y % 4) % 3) ? "First" : "Second";
}
