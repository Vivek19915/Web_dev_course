
let num1;
let num2;
function inputs(){
     num1 = document.getElementById('num1').value
     num2 = document.getElementById('num2').value 
}

function add(){
       
    let ans = parseInt(num1)+parseInt(num2)
    document.getElementById('ans').innerHTML = ans
}
function sub(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let ans = num1-num2
    document.getElementById('ans').innerHTML = ans
}
function mul(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let ans = num1*num2
    document.getElementById('ans').innerHTML = ans
}
function div(){
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    let ans = num1/num2
    document.getElementById('ans').innerHTML = ans
}
