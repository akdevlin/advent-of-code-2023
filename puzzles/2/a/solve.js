const puzzleNumber = `2/a`;
console.log(`---Advent of Code 2023 #${puzzleNumber} ---`);
const myParser = require('../../../utils/input-parser.js');
let linesOfMockData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/mock-data.txt`);
let linesOfData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/data.txt`);
// Change this from mock to data when
// let arrayOfData = linesOfData;
let arrayOfData = linesOfData;
let finalValues = [];
console.log(arrayOfData);

function splitRuns(runString) {
    let runObject = {
        red: 0,
        blue: 0,
        green: 0
    };
    let colorStrings = ['red', 'blue', 'green'];
    let colorSplits = runString.split(',')
    colorSplits.forEach(colorSplit => {
        colorSplit = colorSplit.trim();
        colorStrings.forEach((color) => {
            if(colorSplit.includes(color)){
                let colorValue = parseFloat(colorSplit.split(' ')[0].trim());
                runObject[color] = colorValue;
            }
        });

    });
    // colorStrings.forEach((color) => {
    //
    //     let colorIndex = runString.indexOf(color);
    //     if(colorIndex > -1) {
    //         let colorValue = runString.charAt(colorIndex - 2);
    //         runObject[color] = parseFloat(colorValue);
    //     }
    // });
    console.log(runObject);
    return runObject;
}
function isValidGame(gameObject) {
    const thresholds = {
        red: 12,
        blue: 14,
        green: 13
    };
    return !gameObject.runs.some(run => {
        const invalid = run.red > thresholds.red || run.blue > thresholds.blue || run.green > thresholds.green;
        return invalid;
    })
}

let splitArray = arrayOfData.map((line) => {
    let lineArray = line.split(':');
    let gameNumber = lineArray[0].split(' ');
    gameNumber = gameNumber[1].split(':');
    let runs = lineArray[1].split(';')
    runs = runs.map(run => {
       return splitRuns(run);
    });
    let gameObj = {
        id: parseFloat(gameNumber[0]),
        runs: runs
    };
    return gameObj;
});
console.log(splitArray);

let solution = splitArray.reduce((acc, curr) => {
    let validGame = isValidGame(curr);

    if(validGame) {
        return acc + curr.id;
    } else {
        return acc;
    }
}, 0);
console.log(`Solution: #${puzzleNumber}`, solution);