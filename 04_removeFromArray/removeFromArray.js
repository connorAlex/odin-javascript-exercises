const removeFromArray = function(myArr) {
    let args = Array.from(arguments);

    for (i = 1; i < args.length; i ++){
        
        let index = myArr.indexOf(args[i]);
        
        if (typeof(index) != 'undefined' && index >= 0){
            myArr.splice(index,1);
        }
            
    }
    return myArr;

};

console.log(removeFromArray([1,2,3,4],8))

// Do not edit below this line
module.exports = removeFromArray;
