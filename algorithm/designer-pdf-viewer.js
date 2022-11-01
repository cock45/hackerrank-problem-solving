function designerPdfViewer(h, word) {
    // Write your code here
    const heights = word
        .split('')
        .map((letter) => h[letter.charCodeAt(0) - 97]);

    return Math.max(...heights) * word.length;
}
