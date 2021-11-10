//write a fn that accepts array of 10 numbers (0-9)
//return "(123) 456-7890" 

function makePhoneNumber (arr) {
    return `(${arr.slice(0,3).join('')}) ${arr.slice(3,6).join('')}-${arr.slice(6).join('')}`;
}

let phoneNumber1 = [1,2,3,4,5,6,5,9,1,2]

console.log(makePhoneNumber(phoneNumber1))//prints (123) 456-5912