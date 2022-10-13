//For and while loop Assignments

//Assignment no 1-- print 1-10 numbers using while loop
let a=1

while(a<=10){
    console.log(a)
    a=a+1
} 

//Assignment no 2-- print 10-1 numbers using while
let b=10

while(b>=1){
    console.log(b)
    b=b-1
} 

//Assignment no 3-- print 5 to 15 numbers using for loop
//5,6,7,8...15
for(let i=5; i<=15; i=i+1){
    console.log(i)
}

//Assignment no 4-- print 15 to 10 numbers using for loop
for(let j=15; j>=10; j=j-1){
    console.log(j)
}

//Assignment no 5-- print 1 to 10 even number using while loop
let c=2

while(c<=10){
    console.log(c)
    c=c+2
} 

//Assignment no 6-- print 1 to 10 odd number using for loop
for(let k=1; k<=10; k=k+2){
    console.log(k)
}

//Assignment no 7 and 8-- print first 10 multiple values of 4 using while loop
let d=0

while(d<=40){
    console.log(d)
    d=d+4
} 

//Assignment no 9-- print Multiplicatiion table for number 6 using while loop
let e=1

while(e<=10){
    console.log("6*",e,"=",e*6)
    e=e+1
} 

//Assignment no 10-- print Factors of 24 using while loop
var y=1
while(y<=24){
    if(24%y==0)
    console.log(y)
    y=y+1
}


//Assignment no 10-- print Factors of 24 using for loop

for(var l=1; l<=24; l=l+1){
    if(24%l==0)
    console.log(l)
}

//Assignment no 12 

//Assignment no 13

//Assignment no 14-- print first 10 Fibonacci numbers 
let n1=0;
let n2=1;
for(let i=1; i<=10; i++){
    console.log(n1)
    n3=n1+n2
    n1=n2
    n2=n3
}
