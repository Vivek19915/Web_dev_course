
function fun(){
    let name = document.getElementById("uname").value
    let pass = document.getElementById("upass").value

    window.localStorage.setItem('username',name)
    window.localStorage.setItem('password',pass)
    window.open("welcome.html")
}




