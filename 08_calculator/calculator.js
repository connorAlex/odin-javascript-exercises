const add = function(x,y) {
	z = x + y;
  return z;
};

const subtract = function(x,y) {
	let z = x - y;
  return z;
};

const sum = function(arr) {
  let output = 0;
	arr.forEach((item) => {
    output += item;
  }
  );
  return output;
};

const multiply = function(arr) {
  let output = 1;
	arr.forEach((item) => {
    output *= item;
  }
  );
  return output;
};

const power = function(num, pow) {
  let output = 1;
	for (i = 0; i < pow; i++){
    
    output *= num;
  }
  return output;
};

const factorial = function(num) { //ah, so since 0,1,2! are all 1, this automatically skips them 
	let output = 1;
  for (i = 2; i <= num; i++){
    output *= i;                  //1 x 2 x 3 x 4...etc
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
