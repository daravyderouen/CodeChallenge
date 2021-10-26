

const hasMoreVowewls=(word)=>{
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E','I','O','U'];
    for(let i = 0; i <vowels.length;){
    if(word === vowels[i]){
        vowels +=2;
    }
        return true;
    
    }
    return !!false;
};
    


//console.log(hasMoreVowewls('bada'));
console.log(hasMoreVowewls('bd'));