const puzzleNumber = `3/a`;
console.log(`---Advent of Code 2023 #${puzzleNumber} ---`);
const myParser = require('../../../utils/input-parser.js');
let linesOfMockData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/mock-data.txt`);
let linesOfData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/data.txt`);
// Change this from mock to data when
// let arrayOfData = linesOfData;
let arrayOfData = linesOfMockData;
let finalValues = [];

function isAdjacent(targetRow, targetIndexes, upperRow, lowerRow) {
    return true;
}
function touchesDiagonally(){
    return true;
}
function touchesVertically(){
    return true;
}
function touchesHorizontally(){
    return true;
}
let solution;
console.log(`Solution: #${puzzleNumber}`, solution);
console.log('expected mock solution', 4361);