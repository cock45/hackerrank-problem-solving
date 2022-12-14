// O(nlogn)

function jimOrders(orders) {
    const serveTime = orders
        .map(([order, prepTime], customer) => ({
            time: order + prepTime,
            customer: customer + 1,
        }))
        .sort((a, b) => a.time - b.time || a.customer - b.customer)
        .map(({ customer }) => customer);
}
