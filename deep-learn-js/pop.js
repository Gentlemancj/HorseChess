Array.prototype._pop = function pop() {
    return this.splice(this.length - 1, 1)[0];
}

var a = [1, 2, 3, 4]._pop();

console.log(a)