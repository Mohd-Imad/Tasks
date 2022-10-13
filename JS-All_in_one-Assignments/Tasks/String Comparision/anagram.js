// Anagram words string comparision (same letters different words) Ex: rescue-secure, battle-tablet, etc...

let a = "secure"
let b = "rescue"

let str1 = a.split('').sort().join('')
let str2 = b.split('').sort().join('')

if(str1===str2){
    console.log("True");
}
else{
    console.log("False");
}