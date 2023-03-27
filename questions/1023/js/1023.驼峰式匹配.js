/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 * time: 60ms space: 41.1MB
 */
var camelMatch = function (queries, pattern) {
    const match = (query, patter) => {
        let pIndex = 0, qIndex = 0;
        while (qIndex < query.length) {
            const ch = query.at(qIndex);
            if (ch === pattern[pIndex]) {
                pIndex++;
                qIndex++;
                continue
            }
            const code = query.charCodeAt(qIndex);
            if (code > 96 && code < 123) {
                qIndex++;
            } else {
                return false;
            }
        }
        return pIndex === pattern.length;
    }
    const results = [];
    queries.forEach((t) => {
        results.push(match(t));
    });
    return results;
};
