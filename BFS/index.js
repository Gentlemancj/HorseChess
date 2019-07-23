const entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            },
            f: 'fff',
            g: {
                h: 'hhh'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
}


function flatObj(preKey, obj, result = {}) {
    if (JSON.stringify(obj) === '{}') {
        return {};
    }
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const curKey = preKey ? `${preKey}.${key}` : key;
            if (typeof obj[key] !== 'object') {
                result[curKey] = obj[key];
            } else {
                flatObj(curKey, obj[key], result);
            }
        }
    }
    return result;
}

const res = flatObj(null, entry);
console.log(res);
