// Write code below this line

// Write code above this line
function inverseWhile(){
    var fiveNumbers="";
    var i =5;
    while (i>=0){
        fiveNumbers += +i +",";
        i--;
    }
    return fiveNumbers.slice(0,-1);
}
console.log(inverseWhile());
module.exports = inverseWhile;