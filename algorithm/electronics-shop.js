function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let maxPrice = -1;

    for (let k = 0; k < keyboards.length; k++) {
        for (let d = 0; d < drives.length; d++) {
            const price = keyboards[k] + drives[d];

            if (price > maxPrice && price <= b) {
                maxPrice = price;
            }
        }
    }

    return maxPrice;
}
