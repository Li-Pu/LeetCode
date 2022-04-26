/**
 * @param {string[]} logs
 * @return {string[]}
 * time: 60ms space: 43MB
 */
 var reorderLogFiles = function (logs) {
    const format = (log) => {
        const idx = log.indexOf(' ');
        const content = log.substring(idx + 1)
        return {
            biaozhifu: log.substring(0, idx),
            type: content[0] <= '9' && content[0] >= '0' ? 'number' : 'alphabet',
            content
        }
    }

    const logSort = (a, b) => {

        const strCmp = (s1, s2) => {
            const len = Math.min(s1.length, s2.length);

            for (let i = 0; i < len; i++){
                if (s1[i] !== s2[i]) {
                    return s1[i] > s2[i] ? 1: -1;
                }
            }

            return s1.length - s2.length;
        }

        if (a.type !== b.type) {
            return a.type === 'alphabet' ? -1 : 1;
        } else if (a.type === 'alphabet') {
            a
            b
            if (a.content === b.content) {
                return strCmp(a.biaozhifu, b.biaozhifu)
            } else {
                return strCmp(a.content, b.content)
            }
        }
        return 1;
    }

    const unformat = ({ biaozhifu, content }) => `${biaozhifu} ${content}`;

    return logs.map(format).sort(logSort).map(unformat);
};
