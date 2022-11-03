// O(n); n: lcm(c.length, k) / k

function jumpingOnClouds(c, k) {
    let energy = 100;
    let cloud = 0;

    do {
        cloud += k;

        if (cloud >= c.length) {
            cloud %= c.length;
        }

        energy -= 2 * c[cloud] + 1;
    } while (cloud);

    return energy;
}
