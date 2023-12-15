const puzzleNumber = `4/b`;
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
let cardCount = 0;
games.forEach((gameResult) => {
    cardCount += 1;
    if(gameResult.matches.length > 0) {
        cardCount += winCopyOfCard(gameResult, games);
    }
});
// console.log(cardCount);

function winCopyOfCard(game, gameArray) {
    // console.log('game', game);
    if(!game){
        // console.log('what is this?', game);
        return;
    }

    let newCards = 0;
    if(game.matches.length) {
        let childWins = 0;
        for(let i = 0; i < game.matches.length; i++) {
            const childIndex = game.gameNumber + i;
            if(childIndex >= gameArray.length){
                continue;
            } else {
                //add 1 card for the child
                childWins += 1;
                //see if the child has any winning numbers
                if(gameArray[childIndex].matches.length){
                    childWins += winCopyOfCard(gameArray[childIndex], gameArray);
                }
            }
        }
        newCards = childWins + newCards;
    }
    // console.log('game', game);
    // console.log('matches', game.matches);
    // console.log('newCards', newCards);
    return newCards;
}

let solution = cardCount;
// let solution = games.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue.totalScore;
// }, 0);

console.log(`Solution: #${puzzleNumber}`, solution);

function doubleIt(input) {
    return input * 2;
}