// Write code below this line

// Write code above this line
function myForLoop1(){
    var evenNumbers = "";
    for(var i=0; i<=9; i++ ){
        
        
        if( i === 0 || i % 2 ===0) {
            evenNumbers += +i + ", ";
        }
        

    }
    return evenNumbers.slice(0,-2);

}
function myForLoop2(){
    var evenInverseNumbers= " ";
    for(var i=9; i<=10; i-- ){

        if(i === 0 || i % 2 ===0) {
            evenInverseNumbers += +i + ", ";
        }

    }
    return evenInverseNumbers.slice(0,-2);


}
console.log(myForLoop1());
console.log(myForLoop2());
module.exports = {myForLoop1, myForLoop2};