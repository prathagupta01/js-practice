const getTheTitles = function(obj) {
    const arratitles = [];
    for (let i = 0; i < obj.length; i++) {  
        arratitles.push(obj[i].title);
    }
    return arratitles;
};

// Do not edit below this line
module.exports = getTheTitles;
