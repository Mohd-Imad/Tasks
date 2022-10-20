// Merge the array of both the objects   //output---['HTML','React','CSS','JS']


let obj1 = {
    name:"Imad",
    skills:["HTML","React"]
}

let obj2 = {
    name:"Pandi",
    skills:["CSS","JS"]
}

let output = []

let value1 = obj1.skills
    value1.map((val)=>{
        output.push(val)
    })
    
console.log(output);

let value2 = obj2.skills
    value2.map((val)=>{
        output.push(val)
    })
    
console.log(output);
    