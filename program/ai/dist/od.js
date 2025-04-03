function findBestMove(color, board) {
    var length = board.length;
    var maxLength = 0;
    var bestMove = -1;
    for (var i = 0; i < length; i++) {
        if (board[i] === 0) {
            board[i] = color;
            var currLength = getMaxContinuousLength(board, color);
            board[i] = 0;
            if (currLength < 5 && currLength > maxLength) {
                maxLength = currLength;
                bestMove = i;
            }
            else if (currLength === maxLength && Math.abs(i - Math.floor(length / 2)) < Math.abs(bestMove - Math.floor(length / 2))) {
                bestMove = i;
            }
        }
    }
    return bestMove;
}
function getMaxContinuousLength(board, color) {
    var length = board.length;
    var maxLength = 0;
    var currLength = 0;
    for (var i = 0; i < length; i++) {
        if (board[i] === color) {
            currLength++;
            if (currLength > maxLength) {
                maxLength = currLength;
            }
        }
        else {
            currLength = 0;
        }
    }
    return maxLength;
}
// 示例用法
var color = 1;
var board = [-1, 0, 1, 1, 1, 1, 1, 0, 1];
var bestMove = findBestMove(color, board);
console.log(bestMove);
