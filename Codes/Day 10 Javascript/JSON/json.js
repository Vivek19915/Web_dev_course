// Example -01 
// let demo={
//     "sub_one":"HTML",
//     "sub_two":"Css",
//     "sub_three" : "Bootstrap"
// }

// console.log(demo)
// console.log(demo.sub_one , demo.sub_two , demo.sub_three)

// // Iterate JSON
// for(let i in demo){
//     console.log(i);               //print keys
//     console.log(demo[i]);         //print values of keys
// }




// Example-2
let demo = {
    "wish" : "Welcome to",
    "myWish" : ()=>{
        return "Json Sessions"
    }
}
console.log(demo.wish , demo.myWish())


// Exapmle-3
// freeze and seal   ------->  Go to HTML
let obj ={
    "p_id" : 111
}
obj.p_name = "Vivek"        //add new data
obj.p_id = 101              //modifying data
console.log(obj)


// Lock Object using freeze function 
// Object.freeze(obj)
// console.log("After freeze",obj)
// // try to modify
// obj.p_id= 10002;              
// console.log(obj)              //no error no modification
// //try to add new data
// obj.p_class = 11;
// console.log(obj)              //no error no modification
// //try to delete data
// delete obj.p_id;
// console.log(obj)               //no error no modification



// Lock Object using seal function 
Object.seal(obj)
console.log("After seal",obj)
// try to modify
obj.p_id= 10002;                
console.log(obj)                //no error modification happens
//try to add new data
obj.p_class = 11;
console.log(obj)                //no error no modification
//try to delete data
delete obj.p_id;
console.log(obj)                //no error no modification




