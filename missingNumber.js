
/*

function findMissingNumber(a,n) {
    let total =Math.floor(((n+1) *n)/2);
    for(let i=0; i <n; i++)
    total =+ a[i];
    return total;
}

let missingNumber=([1,2,3,4,5,6,7,8,10]);
let n = missingNumber.length;
let missing = findMissingNumber(missingNumber,n);
console.log(missing)

*/

var a = [1, 3, 4, 5],
  count = 5;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing);