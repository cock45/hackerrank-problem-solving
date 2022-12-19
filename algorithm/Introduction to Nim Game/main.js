function nimGame(pile) {
    return pile.reduce((acc, v) => acc ^ v) ? "First" : "Second";
}
