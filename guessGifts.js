function guessGifts(wishlist, presents) {
    return wishlist.filter(function (x) {
      return presents.some(function (y) {
        return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
      });
    }).map(function (x) {
      return x.name;
    });
  }
  
  
  var wishlist = [
      {name: "diamond ring", size: "small", clatters: "no", weight: "light"},
      {name: "Boob Job", size: "medium", clatters: "a bit", weight: "medium"},
      {name: "laptop", size: "medium", clatters: "a bit", weight: "medium"}
  ];
  
  var presents = [
      {size: "small", clatters: "no", weight: "medium"},
      {size: "medium", clatters: "a bit", weight: "medium"}
  ];
  
  console.log(guessGifts(wishlist, presents));