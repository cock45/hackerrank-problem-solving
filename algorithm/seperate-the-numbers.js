// Time Complexity is O(|s|^2)

function separateNumbers(s) {
    for (let subLen = 1; 2 * subLen <= s.length; subLen++) {
        let x = BigInt(s.slice(0, subLen));

        let newStr = "";

        while (newStr.length < s.length) {
            newStr += x++;
        }

        if (newStr === s) {
            return console.log("YES", s.slice(0, subLen));
        }
    }

    console.log("NO");
}
