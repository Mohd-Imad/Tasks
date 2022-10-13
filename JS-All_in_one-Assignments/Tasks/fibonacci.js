//Printing first 10 fibonacci numbers

let n1 = 0;     
let n2 = 1;


//using for-loop
/* for(i=0; i<=10; i++){
    console.log(n1);
    n3 = n1+n2;
    n1 = n2;
    n2 = n3;
} */

//using while loop
let i = 0;

while(i<=10){
    console.log(n1);
    n3 = n1+n2;
    n1 = n2;
    n2 = n3;
    i = i+1;
}

