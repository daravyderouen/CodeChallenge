const nbYear = (p0, p100, aug, p) => {
    const rate = p100/100 + 1;
    let n, pop;
    for (n = 0, pop = p0; pop < p; n++) {
        pop = (pop * rate + aug);
    }
    return n + " years";
}


console.log(nbYear(1500, 2.5, 50, 2000))