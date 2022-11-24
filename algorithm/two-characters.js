// Time Complexity is O(|s|)

function alternate(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let max = 0;
    const sArr = Array.from(s);

    for (let i = 0; i < 26; i++) {
        for (let j = i + 1; j < 26; j++) {
            const subArr = sArr.filter(
                (letter, index) =>
                    letter === alphabet[i] || letter === alphabet[j]
            );
            let subLength = subArr.length;
            for (let k = 1; k < subLength; k++) {
                if (subArr[k - 1] === subArr[k]) {
                    subLength = 0;
                }
            }
            if (subLength > max) {
                max = subLength;
            }
        }
    }

    return s.length === 1 ? 0 : max;
}
