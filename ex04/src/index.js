// Only change code below this line 

// Only change code above this line
function compareDifferentValues(m, n){
    if(m===n){
        return "Equal";
    }
    return "Not Equal";
}
console.log(compareDifferentValues(8," 8"));
console.log(compareDifferentValues("8", 8));
console.log(compareDifferentValues('8', 8));
console.log(compareDifferentValues("8", "8"));
console.log(compareDifferentValues(8, 8));
module.exports=compareDifferentValues;