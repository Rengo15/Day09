// Write code below this line

// Write code above this line
function myDoWhile (){
    var myNumbers="";
    var i=0;
    while(i<10){
        myNumbers += +i + ",";
        i++;
    }
    return myNumbers.slice(0, -1);
}
console.log(myDoWhile())
module.exports = myDoWhile;