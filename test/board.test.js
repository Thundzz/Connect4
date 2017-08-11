const assert = require('assert');
const BOARD = require("../board.js")


describe('BOARD', function() {
    it('initialized board should have correct length', function() {
        var empty_board = BOARD.empty(7);
        assert(empty_board);
        assert(empty_board.length == 7);
    });

    it('initialized board should contain zeroes', function() {
        var size = 7;
        var empty_board = BOARD.empty(size);
        assert(empty_board);
        for(var i = 0; i < size; i++){
            for(var j = 0; j < size; j++){
                assert(empty_board[i][j] == 0);
            }
        }
    });

});
