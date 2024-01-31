//Eg01
//Create a promise
// let myPromise = new Promise((resolve, reject)=>{
//     resolve('Tomorrow i will be at home')
// })
// //consume promise
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })


//Eg02
// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Success....!')
//     },5000)
// })
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })


//Eg03
// let myPromise = new Promise((resolve, reject)=>{
//     reject('Failure')
//     resolve('Success')
// })
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })




//Eg04
// let myPromise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('Success')
//     },4000)
//     setTimeout(()=>{
//         reject('Failure')
//     },5000)
// })
// myPromise.then((posRes)=>{
//     console.log(posRes)
// },(errRes)=>{
//     console.log(errRes)
// })





// async and await functions 
//Eg05
let myPromise = new Promise((resolve, reject)=>{
    resolve('Hello')
})
async function my_fun(){
    let res = await myPromise
    console.log(res+"heelo")
}
my_fun()


//Eg06
function add(num) {
    return new Promise((resolve, reject) => {
        resolve(num + 5)
    })
}
function sub(num) {
    return new Promise((resolve, reject) => {
        resolve(num - 3)
    })
}
async function my_fun() {
    let res1 = await add(7)
    let res2 = await sub(res1)
    console.log(res2+"hello")
}
my_fun()

