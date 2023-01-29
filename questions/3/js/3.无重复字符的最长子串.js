/**
 * @param {string} s
 * @return {number}
 * time: 108ms space: 45.6MB
 */
 var lengthOfLongestSubstring = function (s) {
    let ret = 0, left = right = 0, len = s.length;
    const st = new Set();

    while (right < len) {
        if (st.has(s[right])) {
            while (s[left] !== s[right]) {
                st.delete(s[left++])
            }
            st.delete(s[left++])
        }
        st.add(s[right]);
        if (st.size > ret) {
            ret = st.size;
        }
        right++;
    }

    return ret;
};
