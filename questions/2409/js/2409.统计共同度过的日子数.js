/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 * time: 60ms space: 41MB
 */
var countDaysTogether = function (arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const days = (exp) => {
        const [month, day] = exp.split('-').map(t => parseInt(t));
        const monthdays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let res = day;
        for (let i = 0; i < month - 1; i++){
            res += monthdays[i];
        }
        return res;
    }
    const arriveAliceDays = days(arriveAlice), leaveAliceDays = days(leaveAlice),
        arriveBobDays = days(arriveBob), leaveBobDays = days(leaveBob);
    let res = 0;
    if (arriveBobDays < arriveAliceDays) {
        if (leaveBobDays >= arriveAliceDays) {
            if (leaveBobDays <= leaveAliceDays) {
                res += leaveBobDays - arriveAliceDays + 1;
            } else {
                res += leaveAliceDays - arriveAliceDays + 1;
            }
        }
    } else if (arriveBobDays <= leaveAliceDays) {
        if (leaveBobDays <= leaveAliceDays) {
            res += leaveBobDays - arriveBobDays + 1;
        } else {
            res += leaveAliceDays - arriveBobDays + 1;
        }
    }
    return res;
};
