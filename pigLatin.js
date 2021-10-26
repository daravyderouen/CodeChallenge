// Write your solution below:

function pigLatin(word) {
    let regEx = /[aeiou]/gi;
    let newWord = word.toLowerCase();
    let charIndex;

    if (newWord[0].match(regEx)) {
      return newWord + "yay";
    }

    for (char of newWord) {
      if (char.match(regEx)) {
        charIndex = newWord.indexOf(char);
        break;
      }
    }

    return newWord.slice(charIndex) + newWord.slice(0, charIndex) + "ay";
  }

  console.log(pigLatin("babe"))

  

