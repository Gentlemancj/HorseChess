/**
 * 马踏棋盘  深度优先回溯算法
 */



// 起点 （0, 0）
const START = { x: 1, y: 1 };

// 棋盘大小
const MAX_SIZE = 8

/**
 * 
 * @param {START} start 
 * @param {MAX_SIZE} maxSize 
 */

function horseChess(start, maxSize) {
    let routes = [start];
    let points = { [`${start.x}${start.y}`]: 1 };
    let _chess = null;
    const ROUTES_PATH_X = [1, -1, 1, -1, 2, -2, 2, -2];
    const ROUTES_PATH_Y = [2, 2, -2, -2, 1, 1, -1, -1];

    return (function horseChessCury(start, maxSize) {

        // 所有路径走完，退出
        if (routes.length >= maxSize * maxSize) {
            return routes;
        }
        let next = null;;

        let { x, y } = start;
        //路径集合

        // 任意一个点，horse 在移动的时候都有可选择的八个点如下（未过滤超出边界值）：
        // 1.  y 轴移动 2, x 移动 1
        // 1.1 y 轴移动 2, x 移动 -1

        // 2.  y 轴移动 -2, x 移动 1
        // 2.1 y 轴移动 -2, x 移动 -1

        // 3.  y 轴移动 1, x 移动 2
        // 3.1 y 轴移动 1, x 移动 -2

        // 4.  y 轴移动 -1, x 移动 2
        // 4.1 y 轴移动 -1, x 移动 -2

        for (let i = 0; i < 8; i++) {
            const nextX = x + ROUTES_PATH_X[i];
            const nextY = y + ROUTES_PATH_Y[i];
            next = { x: nextX, y: nextY };
            if (points[`${nextX}${nextY}`]) {
                continue
            }
            if (nextY <= maxSize && nextY >= 0 && nextX <= maxSize && nextX >= 0) {
                routes.push(next);
                points[`${nextX}${nextY}`] = 1;

                if (_chess) {
                    delete points[_chess];
                }
                return horseChessCury(next, maxSize);
            }

        }
        // 回溯
        if (_chess) {
            delete points[_chess];
        }
        points[`${start.x}${start.y}`] = -1;
        _chess = `${start.x}${start.y}`;
        routes.pop();
        next = routes[routes.length - 1];

        return horseChessCury(next, maxSize);
    })(start, maxSize)
}




var res = horseChess(START, MAX_SIZE);

console.log(res, res.length)