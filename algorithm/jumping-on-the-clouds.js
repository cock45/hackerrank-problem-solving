// O(|c|)

function jumpingOnClouds(c) {
    // Write your code here
    if (c.length === 2) {
        return 1;
    }

    let result = 0;
    let pos = 0;

    while (pos < c.length - 1) {
        if (c[pos + 2] === 0) {
            pos += 2;
        } else {
            pos++;
        }

        result++;
    }

    return result;
}
