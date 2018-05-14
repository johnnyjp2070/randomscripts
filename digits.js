var spltConv = function (num) {
    var stringed = num.toString();
    console.log(stringed);
    split = stringed.split('');
    console.log(split);
    toNumber = split.map((x)=>{
        return parseInt(x);
    });
    console.log(toNumber);
    return toNumber;
}
function addDigits(number) {
    var output = number.reduce((sum, value)=>{
     return sum + value;
     });
     return output;
}

var num = 999999999999999;

var toAdd = spltConv(num);
console.log(toAdd);
var result = addDigits(toAdd);
while (result > 9){
    var con2 = spltConv(result);
    var result2 = addDigits(con2);
    console.log(result2);
    result = result2;
} 
console.log(result);
