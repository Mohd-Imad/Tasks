let a=310
let b=200
let c=630

//Assignment No : 1--  (greatest number)
var x= Math.max(a,b,c)                //here Math.max--is an inbuilt func to find greatest number
console.log("greatest number",x)

//Assignment No : 2--   (smallest number)
var x= Math.min(a,b,c)                //here Math.min--is an inbuilt func to find smallest number
console.log("Smallest number",x)

//Assignment no : 3-- sorting in Ascending Order
let array=[a,b,c]
array.sort();
console.log(array);

//Assignment no : 4-- sorting in Descending  Order
array.sort();
console.log(array);

//Hutech assignment finding Max and Min value without sort()  inside an array
let arr=[5,52,8]  

let [m,n,o]=arr    //Array destructuring

console.log(m);
console.log(n);
console.log(o);

let ax=Math.min(m,n,o) //Min value
console.log(ax);

let ay=Math.max(m,n,o)  //Max value
console.log(ay);

let az=eval(m+n-o)  //Evaluating the value
console.log(az);

// Substr or Substring (both are same only) method
let srt="mohdimd123@gmail.com"
console.log(srt.substr(0,7));                            //just printing the value from 0-7 index
console.log(srt.substr(srt.indexOf("@")+1));             //just printing the value after '@'
console.log(srt.substring(0,srt.indexOf("@")));          //just printing the value before '@'
// console.log(srt.substring(srt.startsWith("@",14)));