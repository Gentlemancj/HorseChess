const nums = [2, 46, 77, 3, 5, 1, 0, 55, 22, 88, 99, 66];


function quickSort(nums) {
    const arr = [...nums];
    // 获取随机位置
    const rd = Math.floor(Math.random() * nums.length);
    const pivotkey = arr[rd];
    console.log(pivotkey, rd)
    let high, low;
    for (let i = 0; i < rd; i++) {
        if (arr[i] > pivotkey) {
            high = i;
            break;
        }
    }
    for (let i = rd; i < arr.length; i++) {
        if (arr[i] < pivotkey) {
            low = i;
        }
    }
    // let mid = arr[high];
    // arr[high] = arr[low];
    // arr[low] = mid;
    if (!high && !low) {
        return arr;
    }
    if (high && low) {
        [arr[high], arr[low]] = [arr[low], arr[high]];
    }
    if (high && !low) {
        [arr[high], arr[rd]] = [arr[rd], arr[high]];
    }

    if (!high && low) {
        [arr[rd], arr[low]] = [arr[low], arr[rd]];
    }
    return quickSort(arr);

}

console.log(quickSort(nums));