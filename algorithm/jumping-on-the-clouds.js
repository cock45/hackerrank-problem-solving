// O(|c|)

function jumpingOnClouds(c) {
    // Write your code here
    if (c.length === 2) {
        return 1;
    }

    return (
        c
            .join('')
            .split('1')
            .map((group) => group.length)
            .reduce((prev, cur) => prev + Math.floor(cur / 2) + 1, 0) - 1
    );
}
