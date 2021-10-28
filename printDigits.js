/*function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32183)));


*/


/*
 function reverseNum(number) {
  var result = 0,
    counter = 0;
  for (i = number; i >= 1; i = i / 10 - (i % 10) * 0.1) {
    counter = i % 10;
    result = result * 10 + counter;
  }
  return result;
}

console.log(reverseNum(125));
*/


function printDigits (num) {
  let reverse = "";
  while (num > 0) {
    reverse += Math.floor(num % 10);
    num = Math.floor(num / 10)
  }
  return parseInt(reverse);
}
console.log(printDigits(5781));
