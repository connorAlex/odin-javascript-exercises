const findTheOldest = function(arr) {
    let max = 0;
    let oldest = "";
    arr.forEach(item => {
        if (typeof(item.yearOfDeath) === 'undefined'){
            item.yearOfDeath = new Date().getFullYear();
        }
        let age = item.yearOfDeath - item.yearOfBirth;

        if (age > max){
            max = age;
            oldest = item;
        }
        
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
