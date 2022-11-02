// O(n); n: Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a))

function squares(a, b) {
    // Write your code here
    let count = 0;

    for (let i = Math.ceil(Math.sqrt(a)); i * i <= b; i++) {
        count++;
    }

    return count;
}
