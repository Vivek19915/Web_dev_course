//defineProperty
// let obj = {
//     p_id: 111
// }
// console.log(obj)
// Object.defineProperty(obj, "p_name", { value: "P_one", writable: false })
// console.log(obj)
// obj.p_id = 101
// obj.p_name = "P_ONE"
// console.log(obj)


//defineProperties
let obj = {
    p_id: 111
}
console.log(obj)
Object.defineProperties(obj, {
    p_name: { value: 'P_one', writable: true },
    p_cost: { value: 10000, writable: false }
})
console.log(obj)
obj.p_id = 101
obj.p_name = 'P_ONE'
obj.p_cost = 111111
console.log(obj)
