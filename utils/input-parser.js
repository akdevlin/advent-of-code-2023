/**
 * @returns string[]
 *
 */
const fs = require('fs');
function parseLinesOfText(filePath, splitByLine = true) {

    let data = '';
    try {
        data = fs.readFileSync(filePath, 'utf8');
        if(splitByLine) {
            return data.split('\n');
        } else {
            console.log('Hey you are returning raw data!');
            return data;
        }

    } catch (err) {
        console.error(err);
    }

}
function parseLinesOfTextByEmptyLines(filePath) {

    let data = '';
    try {
        data = fs.readFileSync(filePath, 'utf8');

            return data.split('\n\n');

    } catch (err) {
        console.error(err);
    }

}

module.exports = {
    parseLinesOfText,
    parseLinesOfTextByEmptyLines
}