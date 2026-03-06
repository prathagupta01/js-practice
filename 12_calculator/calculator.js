const add = function(a,b) {
	   return a+b;
};

const subtract = function(a,b) {
	return b-a;
};

const sum = function(array) {
	  let total = 0 ;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    } 
    return total;
};

const multiply = function(array) {
    let product = 1 ;
    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }
    return product;
};

const power = function(x,y) {
  return x**y;
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
  else{
    return a * factorial(a - 1);
  }
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
