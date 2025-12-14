const sumAll = function(init,endy) {
    let sum = 0
    if(typeof init != 'number' || typeof endy != 'number') return "ERROR"
    if(init < 0 || endy < 0) return 'ERROR'
    if(!Number.isInteger(init) || !Number.isInteger(endy))return 'ERROR'
    if(init > endy){
        let temp = endy
        endy = init 
        init = temp
    }
    for(let i = init;i<= endy;i++){
            sum += i;
         }
         return sum;
};

// Do not edit below this line
module.exports = sumAll;
