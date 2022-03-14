/**
 * @param {number} n
 * @return {number}
 * time: 80ms space: 47.4MB
 */
 var countVowelPermutation = function (n) {
    let res = [1, 1, 1, 1, 1];
     const MAX = 1000000000 + 7;
    
     for (let i = 1; i < n; i++){
         const tmp = [];
         tmp[0] = res[1];
         tmp[1] = (res[0] + res[2]) % MAX;
         tmp[2] = (res[0] + res[1] + res[3] + res[4]) % MAX;
         tmp[3] = (res[2] + res[4]) % MAX;
         tmp[4] = res[0];

         res = tmp;
     }

    return res.reduce((a, b) => (a + b) % MAX, 0);
};
