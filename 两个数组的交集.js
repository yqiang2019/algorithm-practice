

function intersection(a1, a2) {
    const map = new Map();
    for (const num of a1) {
        map.set(num, true)
    }
    const res = []
    for (const num of a2) {
        if(map.has(num)) {
            res.push(num)
            map.delete(num)
        }
    }
    return res;
}