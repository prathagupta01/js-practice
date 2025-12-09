const reverseString = function(str) {
    let len = str.length
    let reverse =''
    for (let i = len - 1; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
