// O(1)

function timeInWords(h, m) {
    const numberToEng = (value) => {
        const engNumbers = [
            '',
            'one',
            'two',
            'three',
            'four',
            'five',
            'six',
            'seven',
            'eight',
            'nine',
            'ten',
            'eleven',
            'twelve',
            'thirteen',
            'fourteen',
            'fifteen',
            'sixteen',
            'seventeen',
            'eighteen',
            'nineteen',
            'twenty',
        ];
        return value <= 20
            ? engNumbers[value]
            : `twenty ${engNumbers[value - 20]}`;
    };

    if (m === 0) {
        return `${numberToEng(h)} o' clock`;
    } else if (m === 15) {
        return `quarter past ${numberToEng(h)}`;
    } else if (m === 30) {
        return `half past ${numberToEng(h)}`;
    } else if (m === 45) {
        return `quarter to ${numberToEng(h + 1)}`;
    } else if (m < 30) {
        return `${numberToEng(m)} minute${m > 1 ? 's' : ''} past ${numberToEng(
            h
        )}`;
    } else {
        return `${numberToEng(60 - m)} minute${
            m < 59 ? 's' : ''
        } to ${numberToEng(h + 1)}`;
    }
}
