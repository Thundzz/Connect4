var _ = require('lodash');

function is_valid(x, y, boardSize) {
	return x < boardSize && y < boardSize && x >= 0 && y >= 0;
}

function discover_neighbors(x, y, alignmentNum, boardSize, stepfunction) {
    var cells = _.range(-alignmentNum + 1, alignmentNum, 1)
        .map(x => stepfunction(x))
        .filter(coords => is_valid(coords.x, coords.y, boardSize));

    return _.range(cells.length - alignmentNum +1)
        .map(x => cells.slice(x, x + alignmentNum));
}


function neighbors_lists(x, y, alignmentNum, boardSize){
    // TODO : Add other diagonal
    var step_functions = {
        "diagonal" : step => ({
            "x": x + step,
            "y": y + step
        }), 
        "horizontal" : step => ({
            "x": x + step,
            "y": y
        }),
        "vertical" : step => ({
            "x": x,
            "y": y + step
        })
    }
    var horizontal_neighbors = discover_neighbors(x, y, alignmentNum,boardSize, step_functions["horizontal"]);
    var vertical_neighbors = discover_neighbors(x, y, alignmentNum,boardSize, step_functions["vertical"]);
    var diagonal_neighbors = discover_neighbors(x, y, alignmentNum,boardSize, step_functions["diagonal"]);    

    return horizontal_neighbors.concat(vertical_neighbors, diagonal_neighbors)
}

exports.neighbors =  neighbors_lists;