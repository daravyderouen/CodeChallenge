// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
//given a string, return true or false (if else statement)

function isValidString(str) {
  var strArr = str.split('');
  var matches = { ')' : '('};
  var stack = new Array();
  
  for (var i=0; i<strArr.length; i++) {
  var char= strArr[i];
  
  if (Object.values(matches).includes(char)) {
  //opener
  stack.push(char);
  } else if (Object.keys(matches).includes(char)) {
  //closer
  if (stack[stack.length-1] !== matches[char]) {
  return false;
  } else {
  stack.pop(char);
  }
  }
  }
  return !stack.length;
  }
  
console.log(isValidString(sample4))
