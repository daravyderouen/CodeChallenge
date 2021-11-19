/*

Usually when you buy something or sign up for a new account, you’re asked for your credit card number, phone number, or answer to your most secret question. However, since someone could look over your shoulder, you don’t want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters of a given string into ‘#’.

Examples

maskify("4556364607935616") --> "############5616"

maskify("Skippy") --> "##ippy"

maskify("1") --> "1"

maskify("") --> ""


*/

function MaskCharacter(str, mask, n = 1) {
  
    // Slice the string and replace with
    // mask then add remaining string
    return ('' + str).slice(0, -n)
        .replace(/./g, mask)
        + ('' + str).slice(-n);
}

// Number that we want to mask 
var num = 12345678;

// Convert number into string
var str = num.toString();

// Call function without giving value of n
console.log(MaskCharacter(str, '#', 4));

