// strings 
var wish = `Good Morning `
console.log(wish)
var sub = `javascript`
console.log(sub)
// string concatenation
var myWish = `Welcome to ${sub}`
var myWish2 = `Welcome to ` + sub
console.log(myWish)
console.log(myWish2)


// Numbers 
// you can use both let and var 
let decimal = 100
console.log(decimal)
console.log(typeof(decimal))

let double = 100.12
console.log(double)
console.log(typeof(double))

let hexadecimal = 0x100
console.log(hexadecimal)
console.log(typeof(hexadecimal))

let octal = 0o100
console.log(octal)
console.log(typeof(octal))

let binary = 0b100
console.log(binary)
console.log(typeof(binary))





//max number 
console.log(Number.MAX_SAFE_INTEGER)
var num = Number.MAX_SAFE_INTEGER+1
console.log(num)

console.log(Number.MAX_VALUE)
var num = Number.MAX_VALUE+1
console.log(num)




let bigInt = 5n
console.log(bigInt)
console.log(typeof(bigInt))
let largest = 1.7 * 10**308
console.log(largest)
let anotherMax = Number.MAX_VALUE   //is it really maximum number ?
console.log(anotherMax)
anotherMax += 1
console.log(anotherMax)
console.log(typeof(anotherMax))
//Boolean
var flag = true
console.log(flag)
var flag = false
console.log(flag)




// var global scope and let block scope 
//var v/s let
//Eg01
// for(var i = 0; i<10; i++)
// {}
// console.log(i)
// for(let j = 0; j< 10; j++)
// {}
// console.log(j)      //ReferenceError: j is not defined


//Eg02
// var data = 100
// var data = 200
// console.log(data)


// let num = 100
// let num = 200       //SyntaxError: Identifier 'num' has already been declared
// console.log(num)




//Eg03
// var data = 100
// {
//     var data = 200
// }
// console.log(data)   //200


// let num = 100
// {
//     let num = 200
// }
// console.log(num)    //100
//global polluting issue:- local variables affecting global variables.


//Eg04
// console.log(data)
// var data = 100
// console.log(num)    //ReferenceError: Cannot access 'num' before initialization
// let num = 200




//const
const data = {
    value : 100
}
console.log(data)
console.log(data.value)
data.value = 200
console.log(data.value)
// data = {}       //TypeError: Assignment to constant variable.

var da = {
    value :1
}
console.log(da)
console.log(da.value)
da.value = 1111
console.log(da.value)
da = {}

let data_let = {
    value :2
}
console.log(data_let)
console.log(data_let.value)
data_let.value = 2222
console.log(data_let.value)
data_let = {}
console.log(data_let)


// let will give error in redeclearation of varibale 
// not in resassignment of values 
















 









