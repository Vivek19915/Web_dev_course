// 01. map():-
//  - This function is used to manipulate each and every element in array
//  - it returns an array

// let arr = [10, 20, 30, 40, 50]
// console.log(arr.map((element,index)=>{
//     return element*10
// }))
// console.log(arr.map((element,index)=>{
//     return arr[index]*10
// }))
// console.log(arr.map((element, index) => {
//     return '1' + element                           //means if with concat any number or int with strinhg it will become string 
// }))
// console.log(arr.map((element, index) => {
//     return '$' + element
// }))
// let arr2 = ['one','two','three','four','five']
// console.log(arr.map((element, index) => {
//     return [element,arr2[index]]
// }))
// console.log(arr)




// 02. filter():-
//  - this function creates an array based on condition

// let arr = [10, 20, 30, 40, 50]
// console.log(arr.filter((Element,index)=>{
//     return Element >30
// }))
// console.log(arr.filter((Element,index)=>{
//     return Element >=30
// }))

// let arr3 = [10, 20, 30, 40, 50]
// //o/p [300, 400, 500]
// console.log(arr3.map((Element,index)=>{
//     return Element*10
// }).filter((Element,index)=>{
//     return Element>=300
// }))




// 03. reduce()        left to right   0 -> 1
// 04. reduceRight()   right to left   0 <- 1


// let arr = [1, 2, `3`, 4, 5]
// console.log(arr.reduce((pv, cv) => {
//     return pv + cv
// }))
// console.log(arr.reduceRight((pv, cv) => {
//     return pv + cv
// }))








// 05. forEach
// 06. for...of
// 07. for...in
// let arr = [1, 2, 3, 4, 5]
// console.log(arr)
// for(let i = 0; i < arr.length; i++)
// {
//     arr[i] *=10
//     console.log(arr[i])
// }
// console.log(arr)
// arr.forEach((element, index)=>{
//     element *= 10
//     console.log(element)
// })
// console.log(arr)
// for(let x of arr){
//     console.log(x)
// }
// let demo = {
//     'sub_one': 'HTML',
//     "sub_two": "CSS",
//     sub_three: 'Bootstrap'
// }
// for(let x in demo)
//     console.log(demo[x])





// 08. push():- add element at end
// 09. unshift():- add element at begining
// 10. pop():- remove element from end
// 11. shift():- remove element from begining


// let arr = [20, 30, 40]
// console.log(arr)            
// arr.push(50)
// console.log(arr)            
// arr.unshift(10)
// console.log(arr)            
// console.log(arr.pop())      
// console.log(arr)            
// console.log(arr.shift())    
// console.log(arr)            


// 11. some() :-if any one element in array satisfies the condition
//  then it will return true, otherwise false.
// 12. every():-if all elements in array satisfy the condition
//  then it will return true, otherwise false.

// let arr = [10, 20, 30, 40, 50]
// console.log(arr.some((element, index)=>{
//     return element > 10
// })) 
// console.log(arr.every((element, index)=>{
//     return element > 10
// }))  
// console.log(arr.some((element, index) => {
//     return element > 50
// })) 
// console.log(arr.every((element, index) => {
//     return element <= 50
// })) 





// 14. find():-
//  - this function is used to find the element in array
//  - if element found, it will return the same element
//  - if element not found it will return undefined
// 15. includes():-
//  - it is boolean function used to check element present
//    in array or not


// let arr = [10, 20, 30, 40, 50]
// console.log(arr.find((element, index)=>{
//     return element == '30'
// })) 
// console.log(arr.find((element, index)=>{
//     return element === '30'
// })) 
// console.log(arr.includes(30))
// console.log(arr.includes('30'))








// 16. splice()    -> swiss army knife for arrays
// https://javascript.info/array-methods

// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// console.log(arr)    
// arr.splice(5, 2)     //from index 5 delete TWO elements
// console.log(arr)     
// //delete 80
// arr.splice(5, 1)
// console.log(arr)     
// //delete 100
// //arr.splice(6, 1)
// //arr.splice(arr.length - 1, 1)
// arr.splice(-1, 1)                 //arr.length-1 === -1
// console.log(arr)    
// arr.splice(2, 2)
// console.log(arr)    

// //before 90 add 60, 70, 80
// arr.splice(3, 0, 60, 70, 80)
// console.log(arr)  
// //delete 50 and add 30, 40, 50
// arr.splice(2, 1, 30, 40, 50)
// console.log(arr)    
// //add 100 at end
// arr.splice(arr.length, 0, 100)
// console.log(arr)
console.log(valueOf(Infinity))






