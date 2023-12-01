const puzzleNumber = 1;
console.log(`---Advent of Code 2023 #${puzzleNumber} ---`);
const myParser = require('../../utils/input-parser.js');
let linesOfMockData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/mock-data.txt`);
let linesOfData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/data.txt`);
// Change this from mock to data when
// let arrayOfData = linesOfData;
let arrayOfData = linesOfData;
let finalValues = [];
// console.log(linesOfMockData);

let numberWords= [
    {text: 'one', val: 1},
    {text: 'two', val: 2},
    {text: 'three', val: 3},
    {text: 'four', val: 4},
    {text: 'five', val: 5},
    {text: 'six', val: 6},
    {text: 'seven', val: 7},
    {text: 'eight', val: 8},
    {text: 'nine', val: 9},
];

function replaceNumberWordFirst(input) {
    let changedVal = '';
    input.split('').forEach((char) => {
        changedVal += char;
        numberWords.forEach(num => {

            if(changedVal.includes(num.text)){
                changedVal = changedVal.replace(num.text, num.text.split('')[0] + num.val + num.text.split('')[num.text.length - 1]);
            }
        })
    });

    return changedVal.toString();
}

function replaceNumberWordLast(input) {
    let changedVal = '';
    // fruit
    // tiurf
    // t
    // i + t
    input.split('').reverse().forEach((char) => {
        changedVal = char + changedVal;
        numberWords.forEach(num => {

            if(changedVal.includes(num.text)){
                changedVal = changedVal.replace(num.text, num.val);
            }
        })
    });

    return changedVal.toString();
}

// this string includes numbers with shared letters
// and apparently both numbers words are valid as numbers in the input
console.log(replaceNumberWordFirst('86eightwonmn'));
console.log(replaceNumberWordLast('86eightwonmn'));
// console.log(replaceNumberWord('three6fivefoursixgtzfzbkhmnplfm'));
// return;

arrayOfData.forEach(line => {
    let convertedLine = replaceNumberWordFirst(line.toLowerCase());
    console.log(line, convertedLine);
    // turn number words into numbers

    let chars = convertedLine.split('');
    let final = [];
    chars = chars.map(char => {
        return parseFloat(char);
    });
    let numbers = chars.filter(char => {
        if(!isNaN(parseFloat(char))) {
            return char;
        }
    });
    if(numbers.length) {
        final.push(numbers[0]);
        final.push(numbers[numbers.length - 1]);
    }
    console.log(chars);

    finalValues.push(final);
});
console.log(finalValues);
finalValues = finalValues.map(data => {
    return data.reduce((acc, curr) => {
        return parseFloat(acc.toString() + curr.toString())
    });
});
console.log(finalValues)
const solution = finalValues.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(solution);