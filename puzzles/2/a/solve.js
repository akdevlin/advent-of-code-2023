const puzzleNumber = 9999;
console.log(`---Advent of Code 2023 #${puzzleNumber} ---`);
const myParser = require('../../utils/input-parser.js');
let linesOfMockData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/mock-data.txt`);
let linesOfData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/data.txt`);
// Change this from mock to data when
// let arrayOfData = linesOfData;
let arrayOfData = linesOfData;
let finalValues = [];


let solution;
console.log(`Solution: #${puzzleNumber}`, solution);