var obj1 = {
    p_id: 111,
    p_name: "p_one",
    p_cost: 10000
}
console.log(obj1)   //{p_id: 111, p_name: 'p_one', p_cost: 10000}
let arr1 = Object.entries(obj1)
console.log(arr1)   //[["p_id", 111],["p_name", "p_one"],["p_cost", 10000]]
let arr2 = [["p_id", 111], ["p_name", "p_one"], ["p_cost", 10000]]
console.log(arr2)   //[["p_id", 111],["p_name", "p_one"],["p_cost", 10000]]
let obj2 = Object.fromEntries(arr2)
console.log(obj2)   //{p_id: 111, p_name: 'p_one', p_cost: 10000}


