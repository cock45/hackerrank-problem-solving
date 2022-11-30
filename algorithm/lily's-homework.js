// Time Complexity is O(n ^ 2)
// Here n is length of arr

function lilysHomework(arr) {
    const n = arr.length;

    function countSwap(target) {
        const used = new Array(n).fill(0);
        const p = {};

        for (let [i, v] of target.entries()) {
            p[v] = i;
        }

        let cur = 0;

        for (let i = 0; i < n; i++) {
            let x = i;

            if (used[x]) {
                continue;
            }

            while (!used[x]) {
                used[x] = 1;
                x = p[arr[x]];
            }

            cur++;
        }

        return n - cur;
    }

    const swap1 = countSwap([...arr].sort((a, b) => a - b));
    const swap2 = countSwap([...arr].sort((a, b) => b - a));

    return Math.min(swap1, swap2);
}
