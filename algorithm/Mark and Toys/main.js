// O(nlogn)

function maximumToys(prices, k) {
    let count = 0;
    prices.sort((a, b) => a - b);

    while (k > prices[count] && count < prices.length) {
        k -= prices[count++];
    }

    return count;
}
