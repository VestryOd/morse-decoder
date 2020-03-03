const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    if (typeof (expr) !== 'string') throw new Error();

    let words = expr.includes("**********") ? expr.split("**********") : expr;
    let result = [];

    if (Array.isArray(words)) {
        for (const word of words) {
            result.push(decodeWord(word));
        }
    } else {
        result.push(decodeWord(words));
    }

    function decodeWord(str) {
        let letters = str.match(/\d\d\d\d\d\d\d\d\d\d/g); // [5]
        let newWord = "";
        for (const letter of letters) {

            let currentLetter = "";
            let digits = String.prototype.match.call(letter, /\d\d/g); // [**, **, **, **, **]

            currentLetter += digits.filter(el => el !== "00").map(el => el === "10" ? "." : "-").join('');
            newWord += MORSE_TABLE[currentLetter];
        }
        return newWord;
    }
    return result.join(" ");
}

module.exports = {
    decode
}