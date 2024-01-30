// let fun_one = ()=>{
//     return "I am from arrow function"
// }
// console.log(fun_one())



// let fun_one = (arg1,arg2,arg3)=>{
//     console.log(arg1 + arg2 + arg3)
// }
// fun_one(1,2,3)



// let fun_one = ()=>{
//     return `Have a nice day`
// }

// let fun_two = ()=>{
//     return fun_one
// }

// console.log(fun_two()())




let fun_one = ()=>{
    return ()=>{
        return `Have a nice day`
    }
}
console.log(fun_one)
console.log(fun_one())
console.log(fun_one()())