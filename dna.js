function dnaPair(str) {
    const basePair = {
      'A': 'T',
      'T': 'A',
      'C': 'G',
      'G': 'C'
    }
    const arrStr = str.split('');
  
    const arrDNA = arrStr.map(letter =>basePair[letter])
  
    return arrDNA;
  }
  
  console.log(dnaPair("GCG"));
  console.log(dnaPair("ATA"));