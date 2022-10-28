function bonAppetit(bill, k, b) {
    // Write your code here
    const anna =
        (bill.reduce((total, price) => total + price, 0) - bill[k]) / 2;

    console.log(b === anna ? 'Bon Appetit' : b - anna);
}
