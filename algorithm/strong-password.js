// Time Complexity is O(n * m), m is length of special_characters

function minimumNumber(n, password) {
    let [number, lower, upper, special] = [0, 0, 0, 0];
    const special_characters = "!@#$%^&*()-+";

    for (const index in password) {
        const ascii = password.charCodeAt(index);

        if (ascii >= 0x30 && ascii <= 0x39) {
            number = 1;
        } else if (ascii >= 0x41 && ascii <= 0x5a) {
            upper = 1;
        } else if (ascii > 0x61 && ascii <= 0x7a) {
            lower = 1;
        } else if (special_characters.indexOf(password[index]) > -1) {
            special = 1;
        }
    }

    return Math.max(4 - number - lower - upper - special, 6 - n);
}
