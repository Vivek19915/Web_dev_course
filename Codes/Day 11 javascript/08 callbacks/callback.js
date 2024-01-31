function add(num , callback){
    return callback((num+5) , false)
}
function sub(num , callback){
    return callback((num-3) , false)
}
function mul(num , callback){
    return callback((num*4) , false)
}
function div(num , callback){
    return callback((num/2) , false)
}

// This is callback hell problem 
add(5,(addRes,err)=>{
    if(!err){
        console.log("AddRes:- ",addRes);
        sub(addRes , (subRes ,err)=>{
            if(!err){
                console.log("SubRes:- ",subRes)
                mul(subRes ,(mulRes,err)=>{
                    if(!err){
                        console.log("MulRes:- ",mulRes)
                        div(mulRes,(divRes,err)=>{
                            if(!err){
                                console.log("Divres:- ",divRes);
                            }
                        })
                    }
                })
            }
        })
    }
})




// Solution of callback hell problem is using promises and async/await 
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
function mul(num) {
    return new Promise((resolve, reject) => {
        resolve(num * 4)
    })
}
function div(num) {
    return new Promise((resolve, reject) => {
        resolve(num / 2)
    })
}
async function my_fun() {
    let res1 = await add(5)
    let res2 = await sub(res1)
    let res3 = await mul(res2)
    let res4 = await div(res3)
    console.log(res4)
}
my_fun()


