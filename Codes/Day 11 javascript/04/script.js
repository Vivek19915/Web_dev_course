function myBus(destination , route){
    const mainDiv = document.createElement('div')
    const mytitle = document.createElement('h3')
    const myroute = document.createElement('span')

    // appending 
    mainDiv.append(mytitle,myroute)
    document.body.append(mainDiv)

    // setting atrributes 
    mainDiv.setAttribute('class','myDiv m-3 rounded ')
    mytitle.setAttribute('class','myh3 mt-5 text-white')
    myroute.setAttribute('class','d-block text-center mt-5 text-white')

    // inserting innner html content 
    mytitle.innerHTML = destination
    myroute.innerHTML = route

}

myBus("Ujjain",123)
myBus("Indore",13)
myBus("Bhopal",23)
myBus("Dewas",1231)