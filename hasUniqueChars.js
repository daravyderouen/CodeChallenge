// Write your code below

  var isUnique = (str) => {
    const hash = {};
    for (const i in str) {
      if (hash[str[i]]) return false;
      hash[str[i]] = true;
    }
    return true;
  };
  
  console.log(isUnique('Louisiana'));
  console.log(isUnique('Dad'));

  //Set.hasUniqueChars//