const palindromes = function (str) {
    const alpha = "azqwsxedcrfvtgbyhnujmikolp1234567890";
    const rev = str.toLowerCase().split("").filter(c => alpha.includes(c)).join("");
    const revv = rev.split("").reverse().join("");
    return rev === revv;
};

// Do not edit below this line
module.exports = palindromes;
