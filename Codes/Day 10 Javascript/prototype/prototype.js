// //Eg01
// function class_one() { }
// class_one.prototype.wish = `Welcome to Prototype`
// let obj = new class_one()
// console.log(obj.wish)
// //Eg02
// class_one.prototype.sub_one = `Electronics`
// class_one.prototype.sub_two = `Computers`
// class_one.prototype.sub_three = `Electricals`
// console.log(obj.sub_one, obj.sub_two, obj.sub_three)
// //Eg03
// class_one.prototype.myWish = () =>{
//     return `Good Morning`
// }
// console.log(obj.myWish())





// Prototype Chaining 
// 1st Single Inheritance 

// function class_one(){}
// class_one.prototype.fun_one = function(){
//     return "I am from function one"
// }

// class_two.prototype = Object.create(class_one.prototype);        here class-two is child and class-one parent 
                                                                    // before defining class_two first inherit class-one 

// function class_two(){}
// class_two.prototype.fun_two = function(){
//     return "I am from function two"
// }

// let obj = new class_two();
// console.log(obj.fun_one());
// console.log(obj.fun_two());




// 2nd Multilevel inheritance

// function class_one(){}
// class_one.prototype.fun_one = function(){
//     return "I am from function one"
// }

// class_two.prototype = Object.create(class_one.prototype);

// function class_two(){}
// class_two.prototype.fun_two = function(){
//     return "I am from function two"
// }

// class_three.prototype = Object.create(class_two.prototype);
// function class_three(){}
// class_three.prototype.fun_three = function(){
//     return "I am from function three"
// }

// let obj = new class_three();
// console.log(obj.fun_one());
// console.log(obj.fun_two());
// console.log(obj.fun_three());






// 3rd multiple inheritance 
function class_one(){}
class_one.prototype.fun_one = function(){
    return "this is from class one"
}



function class_two(){}
class_two.prototype.fun_two = function(){
    return "this is from class two"
}

class_three.prototype = Object.create(class_one.prototype)
class_three.prototype = Object.create(class_two.prototype)

function class_three(){}
class_three.prototype.fun_three = function(){
    return "This is from class three"
}

let obj = new class_three();
// console.log(obj.fun_one())
console.log(obj.fun_two())
console.log(obj.fun_three())
