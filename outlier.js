//given an array > 3 numbers
//either entirely odd or even integer except for a single integer N. 
//write a fn that takes in array and return outlier

let arr =[2,4,0,100,11,2602,36]

let odds = arr.filter(n => n%2)

//console.log(odds)

let arr2 = [3,7,21,33,55,31,39,92,90,111,137]

let evens = arr2.filter(n => n%2===0)
console.log(evens)