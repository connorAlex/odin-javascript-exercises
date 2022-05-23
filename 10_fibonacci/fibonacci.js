const fibonacci = function(x) {
    if (x < 0){
        return 'OOPS';
    }
    else if(typeof(x) === 'string'){
        x = parseInt(x);
    }
    let fib = [];
    for (i = 0; i < x; i++){
        if (fib.length < 2){
            fib.push(1);
        }
        else{
            let a = fib[fib.length-1] + fib[fib.length-2];
            fib.push(a);
        }
    }
    return fib[x-1];
};

// Do not edit below this line
module.exports = fibonacci;
