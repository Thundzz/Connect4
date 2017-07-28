var _ = require('lodash');

(function(){
	const BOARD_SIZE = 7;
	const ALIGNMENT_NUMBER = 4

	function zeros(dimensions) {
	    var array = [];
	    for (var i = 0; i < dimensions[0]; ++i) {
	        array.push(dimensions.length == 1 ? 0 : zeros(dimensions.slice(1)));
	    }
	    return array;
	}

	function get_empty_board() {
		return zeros([BOARD_SIZE, BOARD_SIZE]);
	}
 
	function print_board(board){
		for (var i = 0; i < BOARD_SIZE ; i ++) {
			for (var j = 0; j < BOARD_SIZE ; j ++) {
				process.stdout.write(board[i][j].toString() + " ");
			}
			process.stdout.write("\n");
		}
		process.stdout.write("\n");
	}

	function play(board, column, player){ 
		if(board[0][column] != 0)		
			throw new Error("error");
		
		board[0][column] = player;	
		apply_gravity(board, column);
	}

	function apply_gravity(board, column){
		for(var i = BOARD_SIZE-1 ; i > -1 ; i--){
			if(board[i][column] == 0)
			{
				var tmp = board[0][column];
				board[0][column] = 0;
				board[i][column] = tmp;
				break;
			}		
		}
	}

	function is_valid(x, y){
		return x < BOARD_SIZE && y < BOARD_SIZE && x >= 0 && y >= 0;
	}

	function horizontal_neighbors(x, y){
		var cells = _.range(-ALIGNMENT_NUMBER+1,ALIGNMENT_NUMBER,1)
		.map(a => ({"x":x+a,"y":y}))
		.filter(coords => is_valid(coords.x, coords.y));
		console.log(cells);

		return _.range(cells.length - ALIGNMENT_NUMBER)
		.map(x=> cells.slice(x, x+ ALIGNMENT_NUMBER));
	}

	function vertical_neighbors(x,y){

	}


	function main(){
		// var board = get_empty_board();
		// print_board(board);
		// play(board, 2, 1);

		// print_board(board);

		console.log(horizontal_neighbors(4,4));
	}
	main();
	

})();