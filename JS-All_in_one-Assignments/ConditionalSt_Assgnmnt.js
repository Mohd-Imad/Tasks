let a=310
let b=200
let c=630


//Assignment No : 1 check the given number is divisible by 7 or not
if(a%7==0){
    console.log('Divisible')
}
else{
    console.log('Not Divisible')
}

//Assignment No : 2 check the given number is multiple of 3 or not
if(a*3==930){
    console.log('Multiple of 3')
}
else{
    console.log('Not Multiple of 3')
}

//Assignment No : 3 (Ternary Operation) check the given number is positive or not
a>=1 ? console.log('Positive number'):console.log('Negetive number')

//Assignment No : 5 (Ternary Operation) check the given number is 3-digits number or not
 a<=999 && a>=100? console.log('yes this is 3 digit number'):console.log('No this is not a 3 digit number')

//Assignment No : 5  (Ternary operator) Check the given number is even or not
b%2==0 ? console.log ("Yes this is a even number"):console.log ("No this is not a even number")

//Assignment No : 7  find the greatest number of given 2 numbers
b<a ?console.log("greatest number is",a):console.log("greatest number is",b)

//Assignment No : 8  find the smallest number oif given 2 numbers
b<a ?console.log("Smallest number is",b):console.log("smallest number is" ,a)

//Assignment (greatest of 3 numbers)
if(a>b && a>c){
    console.log(a +' '+ "is greater");
}
else if(b>a && b>c){
    console.log(b + ' '+'is greater');
}
else{
    console.log(c + ' '+"is greater");
}

//Assignment (smallest of 3 numbers)
if(a<b && a<c){
    console.log(a +' '+ "is smallest");
}
else if(b<a && b<c){
    console.log(b + ' '+'is smallest');
}
else{
    console.log(c + ' '+"is smallest");
}

//Assignment find the maximum and minimum number inside array

let arr=[4,2,1,3]
console.log(arr);
let sorted_arr = arr.sort()
console.log(sorted_arr)
min_arr = console.log(arr[0]); 
max_arr = console.log(arr.length); 