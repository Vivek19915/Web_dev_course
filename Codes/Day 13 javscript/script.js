let arr = [10,20,30,40,10,30,40,50,39]

console.log(arr.filter((element,idx)=>{
    return idx === arr.indexOf(element)
}))