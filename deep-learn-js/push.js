/**
 * v8 引擎使用for循环实现
 */

Array.prototype._push = function () {
    this.splice.apply(this, [this.length, 0].concat(Array.prototype.slice.call(arguments)));
    return this.length;
}