const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */



class VigenereCipheringMachine0 {

  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ !@#$%^&*()_+-=[]{}|;':,.<>?/0123456789\"\\";

  numAlph = {};

  constructor() {
    for (let i = 0; i < this.alphabet.length; i++) {
      this.numAlph[this.alphabet[i]] = i;
    }
  }
    
  encrypt(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    if (text === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let code = '';
    for (let i = 0; i < text.length; i++) {    
      code += this.alphabet[(this.numAlph[text[i]] + this.numAlph[key[i % key.length]]) % this.alphabet.length];
    } 

    return code;
  }
  decrypt(text, key) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    if (text === undefined || key === undefined) throw new Error('Incorrect arguments!');
    let code = '';
    for (let i = 0; i < text.length; i++) {    
      code += this.alphabet[(this.numAlph[text[i]] - this.numAlph[key[i % key.length]] + this.alphabet.length) % this.alphabet.length];
    } 

    return code;    
  }
}


alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const tabulaRecta = [
  [
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z'
  ],
  [
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A'
  ],
  [
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B'
  ],
  [
    'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C'
  ],
  [
    'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D'
  ],
  [
    'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E'
  ],
  [
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F'
  ],
  [
    'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G'
  ],
  [
    'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H'
  ],
  [
    'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I'
  ],
  [
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J'
  ],
  [
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K'
  ],
  [
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L'
  ],
  [
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M'
  ],
  [
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N'
  ],
  [
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O'
  ],
  [
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P'
  ],
  [
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q'
  ],
  [
    'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R'
  ],
  [
    'T', 'U', 'V', 'W', 'X', 'Y',
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S'
  ],
  [
    'U', 'V', 'W', 'X', 'Y', 'Z',
    'A', 'B', 'C', 'D', 'E', 'F',
    'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T'
  ],
  [
    'V', 'W', 'X', 'Y', 'Z', 'A',
    'B', 'C', 'D', 'E', 'F', 'G',
    'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U'
  ],
  [
    'W', 'X', 'Y', 'Z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V'
  ],
  [
    'X', 'Y', 'Z', 'A', 'B', 'C',
    'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W'
  ],
  [
    'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V',
    'W', 'X'
  ],
  [
    'Z', 'A', 'B', 'C', 'D', 'E',
    'F', 'G', 'H', 'I', 'J', 'K',
    'L', 'M', 'N', 'O', 'P', 'Q',
    'R', 'S', 'T', 'U', 'V', 'W',
    'X', 'Y'
  ]
];
const START_POSITION_CHARCODE = 65;


class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this._reerseFlag = !isDirect;
 }

  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const keyUC = key.toUpperCase();
    const keyUCDried = keyUC.replace(/\s/g, '');

    const messageUC = message.toUpperCase();
    const messageUCDried = messageUC.trim();

    const res= [];

    const keyLength = keyUCDried.length;
    const msgLength = messageUCDried.length;

    for (let i = 0, n = 0; i < msgLength; i += 1, n += 1) {
        const messageChar = messageUCDried[i];
        if (!~alphabet.indexOf(messageChar)) {
           res.push(messageChar);
           n--;
           continue;
        }
        const messageCharCode = messageChar.charCodeAt(0);

        const shiftedRowIndex = keyUCDried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;
        const shiftedCharIndex = messageCharCode - START_POSITION_CHARCODE;
        res.push(tabulaRecta[shiftedRowIndex][shiftedCharIndex]); 
    }
    if (this._reerseFlag === true) return res.reverse().join('');
    return res.join(''); 
}

decrypt(encryptMessage, key) {
  if (encryptMessage === undefined || key === undefined) throw new Error('Incorrect arguments!');

  const keyUC = key.toUpperCase();
  const keyUCDried = keyUC.replace(/\s/g, '');

  const encryptMessageUC = encryptMessage.toUpperCase();
  const encryptMessageUCDried = encryptMessageUC.trim();

  const keyLength = keyUCDried.length;
  const msgLength = encryptMessageUCDried.length;

  const res = [];

  for (let i = 0, n = 0; i < msgLength; i++, n++) {
    let encryptMessageChar = encryptMessageUCDried[i];
    const rowIndex = keyUCDried.charCodeAt(n % keyLength) - START_POSITION_CHARCODE;
    const row = tabulaRecta[rowIndex];
         
    if (!~alphabet.indexOf(encryptMessageChar)) {
       res.push(encryptMessageChar);
       n--;
       continue;
    }
    const targetIndex = row.indexOf(encryptMessageChar);
    const unshiftedRow = tabulaRecta[0];
    const trueChar = unshiftedRow[targetIndex];
    
    res.push(trueChar);
    }
    if (this._reerseFlag === true) return res.reverse().join('');
    return res.join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
