// Time Complexity is O(|s|)

function camelcase(s) {
    let words = 1;

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 0x61) {
            words++;
        }
    }

    return words;
}
