function getRomanNumerals (num) {
    let romanNumerals = {
        M       :   1000,
        DCCCC   :   900,
        D       :   500,
        CCCC    :   400,
        C       :   100,
        LIIII   :   90,
        L       :   50,
        XXXX    :   40,
        X       :   10,
        VIIII   :   9,
        V       :   5,
        IIII    :   4,
        I       :   1

    };
    
    let roman = '';
  
  for (let key in romanNumerals) {
    const times = Math.trunc(num / romanNumerals[key]);
    roman += key.repeat(times);
    num -= romanNumerals[key] * times;
  }

  return roman;
}
    
   


console.log(getRomanNumerals(584));
console.log(getRomanNumerals(121));
console.log(getRomanNumerals(2021));