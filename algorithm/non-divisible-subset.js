// O(max{|s|, k / 2})

function nonDivisibleSubset(k, s) {
    // Write your code here
    if (k === 1 || s.length === 1) {
        return 1;
    }

    const rests = new Array(k).fill(0);

    for (let i = 0; i < s.length; i++) {
        rests[s[i] % k]++;
    }

    let result = 0;

    for (let i = 1; 2 * i < k; i++) {
        result += Math.max(rests[i], rests[k - i]);
    }

    if (rests[0] > 0) {
        result++;
    }

    if (k % 2 === 0) {
        result++;
    }

    return result;
}
