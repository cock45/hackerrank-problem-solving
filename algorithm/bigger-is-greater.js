// O(|w|)

function biggerIsGreater(w) {
    // Write your code here
    let lowerPosition = -1;

    for (let i = 0; i < w.length - 1; i++) {
        if (w[i] < w[i + 1]) {
            lowerPosition = i;
        }
    }

    if (lowerPosition === -1) {
        return 'no answer';
    }

    let biggerPosition = -1;

    for (let i = lowerPosition; i < w.length; i++) {
        if (w[i] > w[lowerPosition]) {
            biggerPosition = i;
        }
    }

    const arrW = w.split('');

    const temp = arrW[lowerPosition];
    arrW[lowerPosition] = arrW[biggerPosition];
    arrW[biggerPosition] = temp;

    const arrWStart = arrW.slice(0, lowerPosition + 1);
    const arrWEnd = arrW.slice(lowerPosition + 1).reverse();

    return arrWStart.concat(arrWEnd).join('');
}
