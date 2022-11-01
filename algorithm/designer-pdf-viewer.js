function designerPdfViewer(h, word) {
    // Write your code here
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    const heights = word.split('').map((letter) => h[alphabet.indexOf(letter)]);

    return Math.max(...heights) * word.length;
}
