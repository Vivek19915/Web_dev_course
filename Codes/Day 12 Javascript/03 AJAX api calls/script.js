let url = `http://localhost:3001/products`

function LOAD(){
    $.ajax({
        url:url,
        type:'GET',
        success:(posRes)=>{
            console.log(posRes)
            let x = ``;
            x = x+ `<table border="1px" align="center" cellpadding="10px" cellspacing="10px">
            <thead>
                <tr style="background-color: lightgray;">
                    <th>Id</th>
                    <th>P_id</th>
                    <th>P_name</th>
                    <th>P_cost</th>
                </tr>
            </thead>
            <tbody>`;

            for(let i = 0 ; i < posRes.length ;i++){
                x =  x+
                `
                <tr>
                    <td>${posRes[i].id}</td>
                    <td>${posRes[i].p_id}</td>
                    <td>${posRes[i].p_name}</td>
                    <td>${posRes[i].p_cost}</td>
                </tr>
                `
            }

            x = x + `</tbody>
                </table>`

            document.getElementById("op").innerHTML = x;
        },
        error:(negRes)=>{
            console.log(negRes)
        }
    })
}
LOAD()

// inserting data in the json file
$(document).ready(()=>{
    //when doc ready load the table
    $('#getData').click((event)=>{
        // event.preventDefault()
        LOAD()
    })

    //when click on send we have to post
    $('#send').click((event)=>{
        // event.preventDefault()
        // converting json file to string as ajax only take string 
        let data = JSON.stringify({
            "id":parseFloat(document.getElementById("uid").value),
            "p_id":parseInt(document.getElementById("p_id").value),
            "p_name":document.getElementById("p_name").value,
            "p_cost":parseInt(document.getElementById("p_cost").value)
        })

        $.ajax({
            url:url,
            type:'POST',
            contentType: "application/json; charset=utf-8",
            datatype:"json",
            data:data,
            success:(posRes)=>{
                console.log(posRes)
                LOAD()
            },
            error:(negRes)=>{
                console.log(negRes)
            }
        })
    })



    //updating data
    $('#update').click((event)=>{
        event.preventDefault()
        // converting json file to string as ajax only take string 
        let id = parseFloat(document.getElementById("uid").value);
        let data = JSON.stringify({
            "id": id,
            "p_id":parseInt(document.getElementById("p_id").value),
            "p_name":document.getElementById("p_name").value,
            "p_cost":parseInt(document.getElementById("p_cost").value)
        })

        $.ajax({
            url:url + "/" + id,
            type:'PUT',
            contentType: "application/json; charset=utf-8",
            datatype:"json",
            data:data,
            success:(posRes)=>{
                
                console.log(posRes)
                LOAD()
            },
            error:(negRes)=>{
                console.log(negRes)
            }
        })
    }) 


    //deleting data
    $('#delete').click((event)=>{
        event.preventDefault()
        // converting json file to string as ajax only take string 
        let id = parseFloat(document.getElementById("uid").value);
        let data = JSON.stringify({
            "id": id,
            "p_id":parseInt(document.getElementById("p_id").value),
            "p_name":document.getElementById("p_name").value,
            "p_cost":parseInt(document.getElementById("p_cost").value)
        })

        $.ajax({
            url:url + "/" + id,
            type:'DELETE',
            contentType: "application/json; charset=utf-8",
            datatype:"json",
            data:data,
            success:(posRes)=>{
                console.log(posRes)
                LOAD()
            },
            error:(negRes)=>{
                console.log(negRes)
            }
        })
    }) 

})


