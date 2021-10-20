// Write your code below this line.

/*
This attempt does not work. It does not give us what the instructions want. 
function luckyNums(n){
    let array = [];
    for (let i = 0; i < n; i++){
        array.push(Math.floor(Math.random() * 10)) + 1//floor gets you the whole number//
    }
    return array
}
console.log(luckyNums(2))

*/

//a function that takes a number between 1-10 and returns an array of unique random
//numbers//


luckyArr = []
let i = 0

function luckyNum (n){
    while(i < n){
    let x = Math.floor((Math.random() * 10)+1)

        if (!luckyArr.includes(x)){
            luckyArr.push(x)
            i++
        }
    }
    return luckyArr
}

console.log(luckyNum(6));

