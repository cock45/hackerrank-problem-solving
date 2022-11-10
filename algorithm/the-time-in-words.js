// O(1)

function timeInWords(h, m) {
    const numbers = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "tweleve",
        "thirteen",
        "fourteen",
        "quarter",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
        "twenty",
        "twenty one",
        "twenty two",
        "twenty three",
        "twenty four",
        "twenty five",
        "twenty six",
        "twenty seven",
        "twenty eight",
        "twenty nine",
        "half",
    ];
    const hour = m <= 30 ? h : (h + 1) % 12;
    const min = m <= 30 ? m : 60 - m;
    const prefix = m > 30 ? "to" : "past";
    const unit = min === 1 ? "minute" : "minutes";

    if (min === 0) {
        return [numbers[hour - 1], "o' clock"].join(" ");
    }

    if (min === 15 || min === 30) {
        return [numbers[min - 1], prefix, numbers[hour - 1]].join(" ");
    }

    return [numbers[min - 1], unit, prefix, numbers[hour - 1]].join(" ");
}
