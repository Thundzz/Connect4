const assert = require('chai').assert;
const NEIGHBORS = require("../neighbors.js")


describe('NEIGHBORS', function() {
    it('should return correct neighbors at (0,0)', function() {
        var neighbors = NEIGHBORS.neighbors(0, 0 , 4, 7)
        console.log(neighbors);
        assert.isOk(neighbors.length == 3);
        assert.deepInclude(neighbors, [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }]);
        assert.deepInclude(neighbors, [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 } ]);
        assert.deepInclude(neighbors, [ { x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 } ]);
    });


});
