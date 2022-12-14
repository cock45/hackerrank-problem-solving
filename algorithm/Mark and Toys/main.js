// O(nlogn)

function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);

    let count = 0;
    for (let i = 0; i < prices.length && k >= prices[i]; k -= prices[i++]) {
        count++;
    }

    return count;
}
