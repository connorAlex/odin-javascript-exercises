const palindromes = function (a) {
    a = a.toLowerCase();
    let output = "";
    const regex = /[^A-Za-z]/g;
    b = a.replace(regex,"");
    console.log("b:"+ b);
    for (i = b.length - 1; i >= 0; i--){
        output += b[i];
    }
    console.log(output);
    if (output === b){
        return true;
    }
    else{
        
        return false;
    }
};
palindromes("hannah!!");
// Do not edit below this line
module.exports = palindromes;
