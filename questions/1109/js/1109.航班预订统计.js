/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 * time: 1384ms space: 63MB
 */
var corpFlightBookings = function(bookings, n) {
    const results = new Array(n).fill(0)
    for(let i = 0; i< bookings.length; i++) {
        const [min, max, seat] = bookings[i];
        for(let j = min; j<= max; j++){
            results[j - 1] += seat;
        }
    }
    return results
};
