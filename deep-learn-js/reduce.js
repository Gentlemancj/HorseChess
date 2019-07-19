Array.prototype._reduce = function (fn, sum) {
    for (let i = 0; i < this.length; i++) {
        sum = fn(this[i], sum);
    }
    return sum;
}

var sum = [1, 2, 3, 4]._reduce(function (a, b) {
    return a + b;
}, 0)

console.log(sum)
