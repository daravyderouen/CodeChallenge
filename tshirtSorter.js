// Write your solution below:
//write a fn that takes in string ONLY(s,m,l)
//sort by sizes: s,m,l
//never include characters outside of lowercase or contain spaces


const sorter = (a,b) => {
    const legend = [-1,0,1];
    return legend[+(b>a)]
}
const tshirtSorter = str => {
    const strArr = str.split("");
    return strArr
    .sort(sorter)
    .join("")
    .toLocaleLowerCase()
    .replace(/\s/g, "");
}
let str = "lms"
    console.log(tshirtSorter('smllms'))