// object to keep main sudoku data
let objectSudoku = [
    { "row": 0, "column": 0, "value": 7 }, { "row": 0, "column": 1, "value": 0 }, { "row": 0, "column": 2, "value": 4 }, { "row": 0, "column": 3, "value": 8 }, { "row": 0, "column": 4, "value": 0 }, { "row": 0, "column": 5, "value": 0 }, { "row": 0, "column": 6, "value": 3 }, { "row": 0, "column": 7, "value": 0 }, { "row": 0, "column": 8, "value": 1 },
    { "row": 1, "column": 0, "value": 8 }, { "row": 1, "column": 1, "value": 2 }, { "row": 1, "column": 2, "value": 0 }, { "row": 1, "column": 3, "value": 5 }, { "row": 1, "column": 4, "value": 0 }, { "row": 1, "column": 5, "value": 0 }, { "row": 1, "column": 6, "value": 0 }, { "row": 1, "column": 7, "value": 4 }, { "row": 1, "column": 8, "value": 0 },
    { "row": 2, "column": 0, "value": 0 }, { "row": 2, "column": 1, "value": 0 }, { "row": 2, "column": 2, "value": 9 }, { "row": 2, "column": 3, "value": 4 }, { "row": 2, "column": 4, "value": 3 }, { "row": 2, "column": 5, "value": 0 }, { "row": 2, "column": 6, "value": 5 }, { "row": 2, "column": 7, "value": 0 }, { "row": 2, "column": 8, "value": 0 },
    { "row": 3, "column": 0, "value": 3 }, { "row": 3, "column": 1, "value": 1 }, { "row": 3, "column": 2, "value": 0 }, { "row": 3, "column": 3, "value": 0 }, { "row": 3, "column": 4, "value": 0 }, { "row": 3, "column": 5, "value": 0 }, { "row": 3, "column": 6, "value": 8 }, { "row": 3, "column": 7, "value": 0 }, { "row": 3, "column": 8, "value": 7 },
    { "row": 4, "column": 0, "value": 0 }, { "row": 4, "column": 1, "value": 8 }, { "row": 4, "column": 2, "value": 0 }, { "row": 4, "column": 3, "value": 0 }, { "row": 4, "column": 4, "value": 0 }, { "row": 4, "column": 5, "value": 0 }, { "row": 4, "column": 6, "value": 0 }, { "row": 4, "column": 7, "value": 1 }, { "row": 4, "column": 8, "value": 0 },
    { "row": 5, "column": 0, "value": 9 }, { "row": 5, "column": 1, "value": 0 }, { "row": 5, "column": 2, "value": 7 }, { "row": 5, "column": 3, "value": 0 }, { "row": 5, "column": 4, "value": 0 }, { "row": 5, "column": 5, "value": 0 }, { "row": 5, "column": 6, "value": 0 }, { "row": 5, "column": 7, "value": 3 }, { "row": 5, "column": 8, "value": 2 },
    { "row": 6, "column": 0, "value": 0 }, { "row": 6, "column": 1, "value": 0 }, { "row": 6, "column": 2, "value": 6 }, { "row": 6, "column": 3, "value": 0 }, { "row": 6, "column": 4, "value": 1 }, { "row": 6, "column": 5, "value": 5 }, { "row": 6, "column": 6, "value": 4 }, { "row": 6, "column": 7, "value": 0 }, { "row": 6, "column": 8, "value": 0 },
    { "row": 7, "column": 0, "value": 0 }, { "row": 7, "column": 1, "value": 7 }, { "row": 7, "column": 2, "value": 0 }, { "row": 7, "column": 3, "value": 0 }, { "row": 7, "column": 4, "value": 0 }, { "row": 7, "column": 5, "value": 9 }, { "row": 7, "column": 6, "value": 0 }, { "row": 7, "column": 7, "value": 6 }, { "row": 7, "column": 8, "value": 5 },
    { "row": 8, "column": 0, "value": 5 }, { "row": 8, "column": 1, "value": 0 }, { "row": 8, "column": 2, "value": 8 }, { "row": 8, "column": 3, "value": 0 }, { "row": 8, "column": 4, "value": 0 }, { "row": 8, "column": 5, "value": 2 }, { "row": 8, "column": 6, "value": 1 }, { "row": 8, "column": 7, "value": 0 }, { "row": 8, "column": 8, "value": 3 }]

let squareArray = [];

// function to display sudoku current table
function display(obj) {
    for (let i = 0; i < 27; i += 9) {
        console.log(obj[i].value, obj[i + 1].value, obj[i + 2].value + "|" + obj[i + 3].value, obj[i + 4].value, obj[i + 5].value + "|" + obj[i + 6].value, obj[i + 7].value, obj[i + 8].value);
    };
    console.log("-----------------");
    for (let i = 27; i < 54; i += 9) {
        console.log(obj[i].value, obj[i + 1].value, obj[i + 2].value + "|" + obj[i + 3].value, obj[i + 4].value, obj[i + 5].value + "|" + obj[i + 6].value, obj[i + 7].value, obj[i + 8].value);
    };
    console.log("-----------------");
    for (let i = 54; i < 81; i += 9) {
        console.log(obj[i].value, obj[i + 1].value, obj[i + 2].value + "|" + obj[i + 3].value, obj[i + 4].value, obj[i + 5].value + "|" + obj[i + 6].value, obj[i + 7].value, obj[i + 8].value);
    };
};

display(objectSudoku);  // display starting table

// function to be looped to calculating sudoku values, checking rows, columns
function checkRowColumn(obj) {
    for (let a = 0; a < 81; a += 1) {
        if (obj[a].value == 0) {
            // arrays gathering base data to check the unique number
            let rowPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
            let columnPossibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            // loop to get row possibilities
            let row = obj[a].row * 9; // example a = 9, row = 1, *9 = 9
            let endrow = row + 9; // example a = 9, endrow = 9+9 = 18, < endrow in loop 
            for (row; row < endrow; row += 1) {
                for (let x = 0; x < 9; x += 1) {
                    if (rowPossibilities[x] == obj[row].value) {
                        rowPossibilities.splice(x, 1)
                    }; // remove from row possibilities
                };
            };

            // loop to get column possibilities
            let column = obj[a].column;
            for (column; column < 81; column += 9) {
                for (let x = 0; x < 9; x += 1) {
                    if (columnPossibilities[x] == obj[column].value) { columnPossibilities.splice(x, 1) }; // remove from column possibilities
                };
            };

            // common = array to get common values for row and column, changing 0 to only one possible value
            let common = [];
            for (let i = 0; i < rowPossibilities.length; ++i) {
                for (let j = 0; j < columnPossibilities.length; ++j) {
                    if (rowPossibilities[i] == columnPossibilities[j]) {
                        common.push(rowPossibilities[i]);
                    };
                };
            };
            common = [...new Set(common)]; // remove duplicates
            if (common.length == 1) { obj[a].value = common[0] };

        };
    };
};

function checkSquares(obj) {
    for (let a = 0; a < 81; a += 1) {
        function squarePlus(a) {
            squareArray = [obj[a].value, obj[a + 1].value, obj[a + 2].value, obj[a + 9].value,
            obj[a + 10].value, obj[a + 11].value, obj[a + 18].value, obj[a + 19].value, obj[a + 20].value]
        };

        if ((obj[a].row >= 0 && objectSudoku[a].row <= 2) && (obj[a].column >= 0 && objectSudoku[a].column <= 2)) {
            squarePlus(0)
        } // first cell, square 1
        else if ((obj[a].row >= 0 && objectSudoku[a].row <= 2) && (obj[a].column >= 3 && objectSudoku[a].column <= 5)) {
            squarePlus(3)
        } // first cell, square 2
        else if ((obj[a].row >= 0 && objectSudoku[a].row <= 2) && (obj[a].column >= 6 && objectSudoku[a].column <= 8)) {
            squarePlus(6)
        } // first cell, square 3
        else if ((obj[a].row >= 3 && objectSudoku[a].row <= 5) && (obj[a].column >= 0 && objectSudoku[a].column <= 2)) {
            squarePlus(27)
        } // first cell, square 4
        else if ((obj[a].row >= 3 && objectSudoku[a].row <= 5) && (obj[a].column >= 3 && objectSudoku[a].column <= 5)) {
            squarePlus(30)
        } // first cell, square 5
        else if ((obj[a].row >= 3 && objectSudoku[a].row <= 5) && (obj[a].column >= 6 && objectSudoku[a].column <= 8)) {
            squarePlus(33)
        } // first cell, square 6
        else if ((obj[a].row >= 6 && objectSudoku[a].row <= 8) && (obj[a].column >= 0 && objectSudoku[a].column <= 2)) {
            squarePlus(54)
        } // first cell, square 7
        else if ((obj[a].row >= 6 && objectSudoku[a].row <= 8) && (obj[a].column >= 3 && objectSudoku[a].column <= 5)) {
            squarePlus(57)
        } // first cell, square 8
        else if ((obj[a].row >= 6 && objectSudoku[a].row <= 8) && (obj[a].column >= 6 && objectSudoku[a].column <= 8)) {
            squarePlus(60)
        }; // first cell, square 9

        // standard possible values
        let possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        // checking lack of standard possible values vs. Sudoku square values
        for (let i = 0; i < 9; i += 1) {
            for (let x = 0; x < 9; x += 1) {
                if (possibilities[x] == squareArray[i]) {
                    possibilities.splice(x, 1)
                };
            };
        };
        // if only 1 value match, then input to table
        if (possibilities.length == 1) {
            obj[a].value = possibilities[0];
        };
    };
};

// making loop to calculating till will be done, and information about complete
const messageDone = setInterval(() => {
    checkRowColumn(objectSudoku);   // loop rows columns function
    checkSquares(objectSudoku);    // loop square function
    let sum = 0
    for (let i = 0; i < 81; i += 1) { sum = sum + objectSudoku[i].value };
    if ((405 - sum) == 0) {
        console.log("----------Sudoku is done!!!----------");
        display(objectSudoku);
        clearInterval(messageDone);
    };
}, 0);