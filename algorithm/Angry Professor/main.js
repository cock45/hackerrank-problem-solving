function angryProfessor(k, a) {
    // Write your code here
    return a.filter((value) => value <= 0).length < k ? 'YES' : 'NO';
}
