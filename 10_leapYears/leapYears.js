const leapYears = function(yearr) {
    // ------------------- first solution -------------------
    // if(yearr % 4 === 0 && (yearr % 100 !== 0 ||yearr % 400 === 0)) return true
    // else return false
    // ------------------- second solution -------------------
    if(yearr % 4 === 0 && (yearr % 100 !== 0)) return true
    else if (yearr % 400 === 0) return true
    else return false
};

// Do not edit below this line
module.exports = leapYears;
