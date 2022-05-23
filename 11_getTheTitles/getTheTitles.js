const getTheTitles = function(arr) {
    let output = [];
    arr.forEach(item => {
        output.push(item.title);
    })
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
