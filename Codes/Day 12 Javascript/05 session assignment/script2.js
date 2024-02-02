let username = window.localStorage.getItem("username")
document.getElementById("myh1").innerHTML = username

function log(){
    window.localStorage.removeItem("username")
}