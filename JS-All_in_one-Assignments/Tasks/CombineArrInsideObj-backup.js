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
 let a = array.pop()              //Removing last element of arr
 let b = array.shift()            //Removing first element of arr

 console.log(a)
 console.log(b)

 let value1 = a.skills
   value1.map((val)=>{
    output.push(val)
   })
   console.log(output)

   let value2 = b.skills
   value2.map((val)=>{
    output.push(val)
   })
   console.log(output)