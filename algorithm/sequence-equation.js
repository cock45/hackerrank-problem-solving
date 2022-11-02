function permutationEquation(p) {
    // Write your code here
    const y = [];

    for (let i = 1; i <= p.length; i++) {
        let x1 = p.indexOf(i) + 1;
        let x2 = p.indexOf(x1) + 1;
        y.push(x2);
    }

    return y;
}
