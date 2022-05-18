const ctof = function(f) {
  //multiply by (9/5) and add in 32.
  if (typeof(f) != 'number'){
    return 'Error';
  }
  return Math.round((f * (9/5) + 32) * 10) / 10;
};

const ftoc = function(c) {
  //subtract 32 and multiply by 5/9
  if (typeof(c) != 'number'){
    return 'Error';
  }
  return Math.round((c - 32) * (5/9) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
