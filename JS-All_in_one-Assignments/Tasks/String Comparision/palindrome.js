// Palindrome words string comparision (same word from both the sides)Ex: madam, mam,rotator, racecar, etc..

let a = "rotator"

let str = a.split('').reverse().join('')

if(a===str){
    console.log("True");
}
else{
    console.log("False");
}
