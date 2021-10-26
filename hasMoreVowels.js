

const hasMoreVowewls=(word)=>{
    let vowelscount = 0
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I','O','U'];
    for(let char of word){
    if(vowels.includes(char)){
        vowels+=1;
        return true
    } else {
        
    }
    }    
    return false
};

    


console.log(hasMoreVowewls('bada'));
console.log(hasMoreVowewls('bd'));