const puzzleNumber = `3/a`;
console.log(`---Advent of Code 2023 #${puzzleNumber} ---`);
const myParser = require('../../../utils/input-parser.js');
let linesOfMockData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/mock-data.txt`);
let linesOfData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/data.txt`);
// Change this from mock to data when
// let arrayOfData = linesOfData;
let arrayOfData = linesOfMockData;
let finalValues = [];

arrayOfData.forEach((line, rowIndex) => {
    let splitLine = line.split('.');
    console.log(splitLine);
    let customLineIndex = 0;
    splitLine.forEach(char => {
        if(char.length && !parseFloat(char)) {

            console.log('this is a special character', char);
            console.log(`special char at index #${customLineIndex} :`, line.charAt(customLineIndex));
        } else if(char.length) {
            console.log('this is a number?', char);
        }
        customLineIndex++;

    })
});
function isAdjacent(targetRow, targetIndexes, upperRow, lowerRow) {
    return true;
}
function touchesDiagonally(targetRow, targetIndexes, upperRow, lowerRow){
    return true;
}
function touchesVertically(targetRow, targetIndexes, upperRow, lowerRow){
    return true;
}
function touchesHorizontally(targetRow, targetIndexes, upperRow, lowerRow){
    return true;
}
let solution;
console.log(`Solution: #${puzzleNumber}`, solution);
console.log('expected mock solution', 4361);