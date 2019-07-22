// var a = 1, b = 2;
// global.a = 'a';
// global.b = 'b';


// function test() {
//     var sum = new Function('return a + b')();
//     console.log(sum)
// }

// test();
Function.prototype._call = function () {
    var context = arguments[0];
    var fn = new Date().getTime();
    context[fn] = this;

    var fnBody = 'context[fn](';
    for (var i = 1; i < arguments.length; i++) {
        fnBody += arguments[i] + ',';
    }
    fnBody += ')';
    new Function('context', 'fn', fnBody)(context, fn);
    delete context[fn];
    return this;
}

var obj = {
    name: 'aaa',
    test: function (a, b, c) {
        console.log(this.name, a, b, c);
    }
}
obj.test._call({ name: 'bbb' }, 1, 2, 3);
