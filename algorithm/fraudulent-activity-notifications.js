// Time Complexity is O(n)
// Here n is length of expenditure

function activityNotifications(expenditure, d) {
    let notifications = 0;

    const spent = new Array(201).fill(0);
    for (let i = 0; i < d; i++) {
        ++spent[expenditure[i]];
    }
    const mid = d % 2 ? (d + 1) / 2 : d / 2 + 1;

    for (let i = d; i < expenditure.length; i++) {
        let median = 0;
        let j = 0,
            count = 0;
        while (count < mid) {
            count += spent[j];
            if ((d % 2 === 0 && count === mid - 1) || d % 2 !== 0) {
                median = j;
            }
            j++;
        }

        if (d % 2 === 0) {
            median = median ? (median + --j) / 2 : --j;
        }

        ++spent[expenditure[i]];
        --spent[expenditure[i - d]];

        if (expenditure[i] >= 2 * median) {
            notifications++;
        }
    }

    return notifications;
}
