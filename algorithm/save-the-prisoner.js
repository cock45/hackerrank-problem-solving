function saveThePrisoner(n, m, s) {
    // Write your code here
    const warned = (s + m - 1) % n;

    return warned === 0 ? n : warned;
}
