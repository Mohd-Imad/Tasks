// Merge the 2 arrays inside array's object      //output---['HTML','React','CSS','JS']

let array = [{
    name:"Imad",
    skills:["HTML","React"]
    },
    {
    name:"Pandi",
    skills:["CSS","JS"]
    }]

let output = []

array.map((arr)=>{
    let [a,b] = arr.skills           //Destructuring array
    console.log(a)
    console.log(b)
    output.push(a,b)                //pushing a & b to an empty array
})

console.log(output);
