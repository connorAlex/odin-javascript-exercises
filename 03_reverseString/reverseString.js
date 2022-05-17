const reverseString = function(userString) {
    const splitArray = userString.split('');
    
    let reverse = splitArray.reverse();
    reverse = reverse.join('');
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
