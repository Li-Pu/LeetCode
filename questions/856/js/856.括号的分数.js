/**
 * @param {string} s
 * @return {number}
 * time: 64ms space: 41.1MB
 */
var scoreOfParentheses = function (s) {
    if (s === '()') {
        return 1;
    }
    let t = 0, index = 0;
    if(s[0] === '('){
        index++;
        t++;
    }
    while(t !== 0 && index < s.length){
        if(s[index] ==='('){
            t++;
        }else if(s[index] === ')'){
            t--;
        }
        index++;
    }
    if(t === 0){
        if(index === s.length){
            return 2 * scoreOfParentheses(s.slice(1, index - 1))
        }else{
            return scoreOfParentheses(s.slice(0, index)) + scoreOfParentheses(s.slice(index))
        }
    }
    return 0;
};