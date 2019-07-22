Function.prototype._apply = function (context, args) {
    var fn = new Date().getTime();
    context[fn] = this;

    var _fnBody = 'context[fn](';
    for (let i = 0; i < args.length; i++) {
        _fnBody += args[i] + ",";
    }
    _fnBody = _fnBody + ')';
    var _fn = new Function('context', 'fn', _fnBody);
    _fn(context, fn);
    delete context[fn];
    return this;
}

var obj = {
    name: 'aaaa',
    test: function (a, b, c) {
        console.log(this.name, a, b, c);
    }
}

obj.test._apply({ name: 'bbb' }, [1, 2, 3]);