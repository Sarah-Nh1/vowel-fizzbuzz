function fizzBuzz(k, f) {
    var o = k.length + f.length ;
 //console.log("The combined length is " + o);
 console.log(o)
 if(o === 0){
   console.log('length is 0')
   return o;
 }
 if (o%3 == 0 && o%5 == 0)
 {
    console.log("fizzbuzz");
    return "Fizzbuzz";
 }
 else if(o%3 == 0 )
 {
    console.log("fizz");
    return "Fizz";
 }
 else if(o%5 == 0)
 {
    console.log("buzz");
    return "Buzz";
 }
 else
 {
    console.log("Sorry it's none of the above but your combined length is " + o);
    return o;
 }
}

var k = [3,4,4,4,4,4,4,4,4,1];
var f = [2,3,4,4,4];

fizzBuzz(k,f);

module.exports = fizzBuzz;