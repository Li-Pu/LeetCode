/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 * time: 80ms space: 51.4MB
 */
var removeDuplicates = function (s, k) {
    let root = p = {
        value: null,
        count: 0,
        next: null,
        prev: null,
    }, cur = s[0], count = 0
    const len = s.length;
    let index = 0;
    while (index < len) {
        if (s[index] !== cur) {
            p.value = cur
            p.count = count
            p.next = {
                value: null,
                count: 0,
                next: null,
                prev: p
            }
            p = p.next
            cur = s[index]
            count = 1
        } else {
            count++;
        }
        index++
    }
    p.value = cur
    p.count = count

    p = root
    while (p !== null) {
        if (p.count >= k) {
            if (p.count % k === 0) {
                if (!p.prev) {
                    root = root.next
                    p = p.next
                } else if (!p.next) {
                    p.prev.next = p.next
                    p = p.next
                }else if (p.prev.value !== p.next.value) {
                    p.prev.next = p.next
                    p.next.prev = p.prev
                    p = p.next
                } else {
                    p.prev.count = p.prev.count + p.next.count
                    p.prev.next = p.next.next
                    if (p.next.next) {
                        p.next.next.prev = p.prev
                    }
                    p = p.prev
                }
            } else {
                p.count = p.count % k
                p = p.next
            }
        } else {
            p = p.next
        }
    }

    let result = '';
    p = root
    while (p !== null) {
        result += p.value.repeat(p.count)
        p = p.next
    }
    return result;
};
