// let var1 = prompt('Enter value for a:')
// console.log(var1)
// alert(var1)


function accept(){
    let fname = document.getElementById('fname').value
    console.log(fname)
    document.getElementById('myName').innerHTML = fname
}

function login(){
    let uname = document.getElementById('uname').value
    let upwd = document.getElementById('upwd').value
    if(uname === 'admin' && upwd === 'admin'){
        window.open('./welcome.html')
    }
    else {
        alert("Login Failed")
    }
}


function logout(){
    alert("logout Success")
    window.close()
}