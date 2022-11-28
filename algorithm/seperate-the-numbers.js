// Time Complexity is O(|s|^2)

function separateNumbers(s) {
    for (let i = 1; 2 * i <= s.length; i++) {
        const startNum = s.slice(0, i);

        let pos = 0;

        for (
            let num = BigInt(startNum);
            pos < s.length && s.startsWith(num, pos);
            num++
        ) {
            pos += num.toString().length;
        }

        if (pos === s.length) {
            return console.log("YES", startNum);
        }
    }

    console.log("NO");
}
