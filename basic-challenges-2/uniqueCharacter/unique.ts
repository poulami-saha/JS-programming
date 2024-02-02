const unique = (arr) => {
    const set = new Set(arr);
    if (set.size === arr.length) {
        return true;
    } else return false;
}
module.exports = unique