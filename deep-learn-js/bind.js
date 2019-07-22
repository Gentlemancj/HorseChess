Function.prototype._bind = function (context) {
    var that = this;
    return function () {
        that.apply(context, Array.prototype.slice.call(arguments));
    }
}
var obj = {
    name: 'aaa',
    test: function () {
        console.log(this.name)
    }
}
var test = obj.test._bind({ name: 'cccc' });
// obj.test.call({ name: 'bbbb' })
test.call({ name: 'bbbb' });