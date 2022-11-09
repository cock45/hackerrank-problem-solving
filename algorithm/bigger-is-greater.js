// O(|w|)

function biggerIsGreater(w) {
    // Write your code here
    let n = w.length,
        i,
        j;

    // Find pivot
    for (i = n - 2; i >= 0; i--) {
        if (w[i] < w[i + 1]) {
            break;
        }
    }

    // If pivot is not found
    if (i < 0) {
        return 'no answer';
    }

    // Find rightmost successor of pivot in the suffix
    for (j = n - 1; j > i; j--) {
        if (w[j] > w[i]) {
            break;
        }
    }

    // Swap pivot and right most successor
    const warr = w.split('');
    const temp = warr[i];
    warr[i] = warr[j];
    warr[j] = temp;

    // Reverse the suffix and Join
    const suffix = warr.splice(i + 1, n - i - 1).reverse();

    return warr
        .splice(0, i + 1)
        .concat(suffix)
        .join('');
}
