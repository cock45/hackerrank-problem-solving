// O(nlogn)

function jimOrders(orders) {
    const serveTime = orders.map(([order, prep], index) => [
        order + prep,
        index + 1,
    ]);

    return serveTime.sort(([a], [b]) => a - b).map(([time, index]) => index);
}
