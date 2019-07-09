const nums = [0, 1, 0, 3, 12];

// asr [1, 3, 12, 0, 0]

function moveZeros(arr) {
    const _arr = [...arr];
    const nonZeros = [];
    for (let i = 0; i < _arr.length; i++) {
        if (_arr[i]) {
            nonZeros.push(_arr[i])
        }
    }

    for (let i = 0; i < nonZeros.length; i++) {
        _arr[i] = nonZeros[i]
    }

    for (let i = nonZeros.length; i < _arr.length; i++) {
        _arr[i] = 0;
    }

    return _arr;
}

function moveZeros2(arr) {
    let k = 0;
    const _arr = [...arr];
    for (let i = 0; i < _arr.length; i++) {
        if (_arr[i]) {
            _arr[k++] = _arr[i];
        }
    }


}

console.log(moveZeros(nums));