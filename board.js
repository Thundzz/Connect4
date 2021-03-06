function zeros(dimensions) {
    var array = [];
    for (var i = 0; i < dimensions[0]; ++i) {
        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
    }
    return array;
}

function get_empty_board(boardSize) {
    return zeros([boardSize, boardSize]);
}

function print_board(board) {
    const BOARD_SIZE = board.length;
    for (var i = 0; i < BOARD_SIZE; i++) {
        for (var j = 0; j < BOARD_SIZE; j++) {
            process.stdout.write(board[i][j].toString() + " ");
        }
        process.stdout.write("\n");
    }
    process.stdout.write("\n");
}

exports.print = print_board;
exports.empty = get_empty_board;