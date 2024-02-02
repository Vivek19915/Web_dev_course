let url = `https://restcountries.com/v2/all`
function LOAD() {
    document.getElementById('mycards').innerHTML = `<div class = "spinner-border text-primary"></div> <span class = "text-info">Loading</span>`
    $.ajax({
        url: url,
        type: 'GET',
        success: (posRes) => {
            let countries = posRes
            let x = ``
            let i = 0
            x = `<div class = 'row '> `
            for (i = 0; i < countries.length; i++) {
                x = x + `
        <div class = 'card col-lg-4'>
            <img src = ${countries[i].flag} class = 'card-img-top'>
            <div class = 'card-body'>
                <div class = "h2 card-title">${countries[i].name}</div>
                <div class = "h4 card-subtitle text-muted">${countries[i].capital}</div>
            </div>
        </div>
    `
            }
            x = x + `</div>`
            console.log(x)
            document.getElementById('mycards').innerHTML = x


        },
        error: (errRes) => {
            console.log(errRes)
        }
    })
}
LOAD()
