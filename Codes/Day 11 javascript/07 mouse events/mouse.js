const oval = document.createElement('div')
oval.setAttribute('class','ovl')
document.body.append(oval)


const square = document.createElement('div')
square.setAttribute('class','square')
document.body.append(square)


//mouse events
oval.addEventListener('mouseenter' , ()=>{
    square.style.backgroundColor  = "gray"
    // square.setAttribute('class','blink')
})

oval.addEventListener('mouseleave' , ()=>{
    square.style.backgroundColor  = "transparent"
})

oval.addEventListener('mousedown' , ()=>{
    square.style.backgroundColor  = "yellow"
})

oval.addEventListener('mouseup' , ()=>{
    square.style.backgroundColor  = "transparent"
})

oval.addEventListener('mousemove' , (x)=>{
    console.log("Oval :- "+x.clientX , x.clientY)
})
square.addEventListener('mousemove' , (x)=>{
    console.log("Square:- "+x.clientX , x.clientY)
})
