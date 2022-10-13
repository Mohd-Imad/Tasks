let a = "hello"
let b = "h3fello"

let string1 = a.split('').sort().join('')
let string2 = b.split('').sort().join('')
console.log(string1);
console.log(string2);


for(str1 of string1){
    string2.includes(str1) ? console.log("True") : console.log("False");
}

console.log(`The word "${string1}" ${string2.includes(string1) ? 'is' : 'is not'} in the sentence`);
