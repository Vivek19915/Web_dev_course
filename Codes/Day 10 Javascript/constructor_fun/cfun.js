// function class_one(){
//     this.wish = 'Welcome to Constructor function'
// }
// let obj  = new class_one();
// console.log(obj.wish)



// function class_one(){
//     this.sub_one = 'Angular'
//     this.sub_two = 'NodeJs'
//     this.sub_three = 'MongoDb'
// }
// let obj = new class_one();
// console.log(obj.sub_one , obj.sub_two ,obj.sub_three)




// function class_one(){
//     this.wish = "Good Morning!"
//     this.newwish = ()=>{
//         return "Happy Birthday!"
//     }
// }
// let obj = new class_one();
// console.log(obj.wish,obj.newwish())


// paramaterised constructor 
function class_one(arg1,arg2,arg3){
        this.one = arg1
        this.two = arg2
        this.three = arg3
    }
let obj = new class_one(1,2,3);
console.log(obj.one,obj.two,obj.three)