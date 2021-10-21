// Write your code below

function checkPalindrome (str) {
    return str == str.split('').reverse().join('');
  }
  const checkResults =() =>{
    callback()
  };
  
  checkPalindrome('noon');
  checkPalindrome('bad');
console.log(checkPalindrome('bad'));




/*
//CHECKING USING A LOOP//



function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);

*/

//CHECKING USING A BUILT IN FUNCTION//

/*

function checkPalindrome(str) {

    // convert string to an array//
    const str = string.split('');

    // reverse the array values
    const str = strValues.reverse();

    // convert array to string
    const str = reverseSValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

const str1 ="Bye";

//take input
const string = console.log('Enter a string:');

checkPalindrome(string)
*/
