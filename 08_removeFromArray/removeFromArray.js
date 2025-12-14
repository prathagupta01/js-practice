const removeFromArray = function(arr,...values) {

// --------------------- FIRST METHOD -----------------------

    // let neww = [];
    // for(const val of arr){
    //     if(!values.includes(val)) neww.push(val);
    // }
    // return neww;


// --------------------- SECOND METHOD -----------------------

    // return arr.filter(v => (!values.includes(v)));

// --------------------- THIRD METHOD  - MY METHOD-----------------------

    for(const val of values){
        let index = arr.indexOf(val);
        while(index !== -1){
            arr.splice(index,1);
            index = arr.indexOf(val);
        } 
    }      
        return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
