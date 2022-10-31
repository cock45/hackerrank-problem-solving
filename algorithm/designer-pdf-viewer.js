function designerPdfViewer(h, word) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const maxHeight = word
        .split('')
        .reduce((max, letter) => Math.max(max, h[alphabet.indexOf(letter)]), 0);

    return maxHeight * word.length;
}
