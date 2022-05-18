const sumAll = function(x, y) {
    let minNum = 0;
    let maxNum = 0;
    if (typeof(x) != 'number' || typeof(y) != 'number' || x < 0 || y < 0){
        return "ERROR";
    }
    if (Math.min(x,y) === x){
        minNum = x;
        maxNum = y;
    }
    else{
        minNum = y;
        maxNum = x;
    }
    let output = 0;
    for (i = minNum; i <= maxNum; i++){
        output += i;
    }
    return output;
};

// Do not edit below this line
module.exports = sumAll;
