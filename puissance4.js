
(function() {
	const BOARD_SIZE = 7;
	const ALIGNMENT_NUMBER = 4
	
	const NEIGHBORS = require('./neighbors.js');
	const BOARD = require('./board.js');

	function play(board, column, player) {
		if (board[0][column] != 0)
			throw new Error("error");

		board[0][column] = player;
		apply_gravity(board, column);
	}

	function apply_gravity(board, column) {
		for (var i = BOARD_SIZE - 1; i > -1; i--) {
			if (board[i][column] == 0) {
				var tmp = board[0][column];
				board[0][column] = 0;
				board[i][column] = tmp;
				break;
			}
		}
	}
	
	function main() {
		// var board = get_empty_board();
		// print_board(board);
		// play(board, 2, 1);

		// print_board(board);

		console.log(NEIGHBORS.neighbors(6, 6, ALIGNMENT_NUMBER, BOARD_SIZE));
	}
	main();

})();