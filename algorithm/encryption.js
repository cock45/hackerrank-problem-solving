// O(|s|)

function encryption(s) {
    // Write your code here
    const wrappedS = s.replaceAll(' ', '');
    const numberOfCols = Math.ceil(Math.sqrt(wrappedS.length));
    const result = new Array(numberOfCols).fill('');

    for (let i = 0; i < wrappedS.length; i++) {
        result[i % numberOfCols] += wrappedS[i];
    }

    return result.join(' ');
}
