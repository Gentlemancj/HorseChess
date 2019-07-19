function _new() {
    const _args = Array.prototype.slice.call(arguments)
    let ctor = _args.shift();
    let obj = Object.create(ctor.prototype);
    ctor.apply(obj, _args);
    return obj;
}

function A(a) {
    this.name = a;
}
A.prototype.test = 1111

const a = _new(A, 'test')

console.log(a)