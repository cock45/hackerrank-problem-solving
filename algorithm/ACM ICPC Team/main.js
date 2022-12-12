// O (n ^ 2 * m), n is Number of Attendees, m is Number of Topics

function acmTeam(topic) {
    // Write your code here
    let maxNum = 0;
    let bestTeams = 0;

    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
            let canBeSolved = topic[i]
                .split('')
                .reduce(
                    (total, value, index) => total + (value | topic[j][index]),
                    0
                );

            if (canBeSolved === maxNum) {
                bestTeams++;
            }

            if (canBeSolved > maxNum) {
                maxNum = canBeSolved;
                bestTeams = 1;
            }
        }
    }

    return [maxNum, bestTeams];
}
