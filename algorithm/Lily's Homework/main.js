// Time Complexity is O(n ^ 2)
// Here n is length of arr

function lilysHomework(arr) {
    const n = arr.length;

    function countSwap(target) {
        const vst = new Array(n).fill(0);
        const p = {};

        for (let [i, v] of target.entries()) {
            p[v] = i;
        }

        let cycles = 0;

        for (let i = 0; i < n; i++) {
            if (!vst[i]) {
                cycles++;
                for (let x = i; !vst[x]; x = p[arr[x]]) {
                    vst[x] = true;
                }
            }
        }

        return n - cycles;
    }

    return Math.min(
        countSwap([...arr].sort((a, b) => a - b)),
        countSwap([...arr].sort((a, b) => b - a))
    );
}
