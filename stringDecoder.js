function decoder (code) {
    let result = '';
    let i = 0, n = code.length;
    while (i < n) {
        if (Number(code[i]) == code[i]) {
            i += parseInt(code[i]) + 1;
        }
        else
            result += code[i++];
    }
    return result;
}
let result = decoder('2bna0p1mp2osl0e');
console.log(result);
