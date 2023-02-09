/**
 * @param {string[]} folder
 * @return {string[]}
 * time: 176ms space: 58.8MB
 */
var removeSubfolders = function (folder) {
    const mp = new Map();
    const newFolders = folder.sort((a, b) => a.length - b.length);
    const results = [];
    for (let i = 0; i < newFolders.length; i++) {
        const paths = newFolders[i].split('/')
        let path = paths[0]
        let isSub = false
        for (let j = 1; j < paths.length; j++) {
            path = path + '/' + paths[j]
            if (mp.has(path)) {
                isSub = true;
                break;
            }
        }
        mp.set(path, true)
        if (!isSub) {
            results.push(path)
        }
    }
    return results;
};
