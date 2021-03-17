// Write code below this line

// Write code above this line
function checkSign(num){
    return (num >0 ) ? "postive"
    : (num < 0 ) ? "negative"
    : "zero";
}
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));
module.exports =checkSign;