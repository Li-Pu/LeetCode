/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 * time: 68ms space: 41.4MB
 */
var minimizeXor = function (num1, num2) {
    const string1 = num1.toString(2), string2 = num2.toString(2);
    const oneCount = t => {
        let res = 0;
        for (let i = 0; i < t.length; i++) {
            if (t.at(i) === '1') {
                res++;
            }
        }
        return res;
    }
    const oneCount1 = oneCount(string1), oneCount2 = oneCount(string2);
    let resultString = '' + string1;
    if (oneCount1 === oneCount2) {
        return num1;
    } else if (oneCount1 < oneCount2) {
        let t = oneCount2 - oneCount1;
        for (let i = resultString.length - 1; i >= 0 && t > 0; i--) {
            if (resultString.at(i) === '0') {
                resultString = resultString.slice(0, i) + '1' + resultString.slice(i + 1);
                t--;
            }
        }
        if (t > 0) {
            resultString = '1'.repeat(t) + resultString
        }
    } else {
        let t = oneCount1 - oneCount2;
        for (let i = resultString.length - 1; i >= 0 && t > 0; i--) {
            if (resultString.at(i) === '1') {
                resultString = resultString.slice(0, i) + '0' + resultString.slice(i + 1);
                t--;
            }
        }
    }
    return parseInt(resultString, 2);
};
