var arr = [2, 5, 6, 8];
var result = arr.reduce(function(sum, value){
    return sum + value;
});
console.log(result);