/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * time: 132ms space: 60.2MB
 */
var corpFlightBookings = function(bookings, n) {
    const sums = new Array(n + 1).fill(0)
    for(let i = 0; i< bookings.length; i++) {
        const [min, max, seat] = bookings[i];
        sums[min - 1] += seat;
        sums[max] -= seat;
    }
    sums
    let sum = 0;
    const results = [];
    for (let i = 0; i < n; i++){
        sum += sums[i]
        results.push(sum)
    }
    return results
};
