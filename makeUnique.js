// Write your solution below:
//write a function to remove all duplicate letters from string(slice)
//toLowercase is used
//remove whitespace


let myString = "Daravy Inthavongsy DeRouen";

myString = myString
   .split("")
   .filter((item, index, array) => array.indexOf(item) === index)
   .join("")
   .toLocaleLowerCase()
   .replace(/\s/g, "");
   
console.log(myString); // "darvyinthogseru"