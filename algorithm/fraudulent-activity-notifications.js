// Time Complexity is O(n)
// Here n is length of expenditure

function activityNotifications(expenditure, d) {
    const M = 200;
    const bucket = new Array(M + 1).fill(0);
    for (let i = 0; i < d; i++) {
        ++bucket[expenditure[i]];
    }

    function median() {
        let count = 0;

        if (d % 2) {
            for (let i = 0; i <= M; i++) {
                count += bucket[i];
                if (2 * count > d) {
                    return 2 * i;
                }
            }
        } else {
            let result = -1;
            for (let i = 0; i <= M; i++) {
                count += bucket[i];
                if (2 * count === d) {
                    result = i;
                } else if (2 * count > d) {
                    return result < 0 ? 2 * i : result + i;
                }
            }
        }
    }

    let notifications = 0;
    for (let i = d; i < expenditure.length; i++) {
        if (expenditure[i] >= median()) {
            notifications++;
        }

        ++bucket[expenditure[i]];
        --bucket[expenditure[i - d]];
    }

    return notifications;
}
