//error programme dont use  //its for changing array position

function solve(arr,rotation){
    // if(rotation==0)return arr;
    for(let i=0;i<rotation;i++){
     let element=arr.pop()
    let x= arr.unshift(element)
     console.log(x);
    }
    return arr
    // console.log(a)
}
solve([44,1,22,111],5)