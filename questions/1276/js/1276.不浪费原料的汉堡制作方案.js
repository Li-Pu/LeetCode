/**
 * @param {number} tomatoSlices
 * @param {number} cheeseSlices
 * @return {number[]}
 * time: 64ms space: 43.1MB
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
    if (2 * cheeseSlices > tomatoSlices || tomatoSlices >  4 * cheeseSlices || tomatoSlices % 2 !== 0) {
        return []
    }
    const totalJumbo = (tomatoSlices - cheeseSlices * 2) / 2;
    const totalSmall = cheeseSlices - totalJumbo;
    return [totalJumbo, totalSmall]
};
