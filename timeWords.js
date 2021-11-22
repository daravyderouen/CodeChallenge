

  function timeInWords(h, m) {
    let words = [
      "",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eightteen",
      "nineteen",
      "twenty",
      "twenty one",
      "twenty two",
      "twenty three",
      "twenty four",
      "twenty five",
      "twenty six",
      "twenty seven",
      "twenty eight",
      "twenty nine"
    ];

        if ( h > 12) {
      return `${words[h]} ${words[m]} o'clock pm`
    } 
    else  {
      (h <= 12)
      return `${words[h]} ${words[m]} o'clock am`
 
}
  }

  console.log(timeInWords(13, 15));
  console.log(timeInWords(12, 15));
  console.log(timeInWords(1, 0));
  console.log(timeInWords(2, 0));