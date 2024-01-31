let products = [
    { "p_id": 111, "p_name": "P_one", "p_cost": 10000 },
    { "p_id": 222, "p_name": "P_two", "p_cost": 20000 },
    { "p_id": 333, "p_name": "P_three", "p_cost": 30000 },
    { "p_id": 444, "p_name": "P_four", "p_cost": 40000 },
    { "p_id": 555, "p_name": "P_five", "p_cost": 50000 }
]

// 1st way using document write 

document.write(
    `<table border="1px" align="center" cellpadding="10px" cellspacing="10px">
        <thead>
            <tr style="background-color: lightgray;">
                <th>Sr no</th>
                <th>P_id</th>
                <th>P_name</th>
                <th>P_cost</th>
            </tr>
        </thead>
    <tbody>`
)
//table generation part 
products.forEach((element , index)=>{
    document.write(
        `
        <tr>
            <td>${index+1}</td>
            <td>${element.p_id}</td>
            <td>${element.p_name}</td>
            <td>${element.p_cost}</td>
        </tr>
    `
    )
})


document.write(
    `    </tbody>
    </table>`
)




// 2nd way using appending of string and innerHTML 
let x = ``;
x = x+ `<table border="1px" align="center" cellpadding="10px" cellspacing="10px">
<thead>
    <tr style="background-color: lightgray;">
        <th>Sr no</th>
        <th>P_id</th>
        <th>P_name</th>
        <th>P_cost</th>
    </tr>
</thead>
<tbody>`;

for(let i = 0 ; i < products.length ;i++){
    x =  x+
    `
    <tr>
        <td>${i+1}</td>
        <td>${products[i].p_id}</td>
        <td>${products[i].p_name}</td>
        <td>${products[i].p_cost}</td>
    </tr>
    `
}

x = x + `</tbody>
    </table>`


console.log(x)
document.getElementById("mytable").innerHTML = x;