const puzzleNumber = `4/a`;
console.log(`---Advent of Code 2023 #${puzzleNumber} ---`);
const myParser = require('../../../utils/input-parser.js');
let linesOfMockData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/mock-data.txt`);
let linesOfData = myParser.parseLinesOfText(`./puzzles/${puzzleNumber}/data.txt`);
// Change this from mock to data when
// let arrayOfData = linesOfData;
let arrayOfData = linesOfData;
let finalValues = [];

// console.log(linesOfMockData);
const games = arrayOfData.map((line, index) => {
   const game = {
       winningNumbers: [],
       myNumbers: [],
       matches: [],
       gameNumber: index + 1,
       totalScore: 0
   };
   const winning = line.split(' | ')[0].split(': ')[1].split(' ').filter(item => item !== '');
   const myNumbers = line.split(' | ')[1].split(' ').filter(item => item !== '');
   // console.log('winning', winning);
   // console.log('myNumbers', myNumbers);
   game.winningNumbers = winning;
   game.myNumbers = myNumbers;
   const matches = winning.map(value => {
       myNumbers.forEach(num => {
           if(parseFloat(num) === parseFloat(value)) {
               game.matches.push(parseFloat(num));
           }
       })
   });
   if(game.matches.length){
       if(game.matches.length === 1) {
           game.totalScore = 1;
       } else {
            let final = 0;
           game.matches.forEach((match, index) => {
               if(index === 0) {
                   final = 1;
               }else {
                   final = doubleIt(final);
               }
           } );
           game.totalScore = final;
       }

   }
   // game.totalScore = (matches.length - 1)**2;
   return game;
});
// console.log('games', games);

let solution = games.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.totalScore;
}, 0);

console.log(`Solution: #${puzzleNumber}`, solution);

function doubleIt(input) {
    return input * 2;
}