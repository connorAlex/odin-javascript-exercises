const repeatString = function(userString, count) {
    let output = "";
    
    if (count < 0){
        return 'ERROR'
    }

    for (i = 0; i < count; i++){
        output = output + userString
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
