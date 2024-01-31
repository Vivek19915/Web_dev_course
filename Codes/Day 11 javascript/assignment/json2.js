
let data = { "records":[ {"Name":"Alfreds Futterkiste","City":"Berlin","Country":"Germany"}, {"Name":"Ana Trujillo Emparedados y helados","City":"México D.F.","Country":"Mexico"}, {"Name":"Antonio Moreno Taquería","City":"México D.F.","Country":"Mexico"}, {"Name":"Around the Horn","City":"London","Country":"UK"}, {"Name":"B's Beverages","City":"London","Country":"UK"}, {"Name":"Berglunds snabbköp","City":"Luleå","Country":"Sweden"}, {"Name":"Blauer See Delikatessen","City":"Mannheim","Country":"Germany"}, {"Name":"Blondel père et fils","City":"Strasbourg","Country":"France"}, {"Name":"Bólido Comidas preparadas","City":"Madrid","Country":"Spain"}, {"Name":"Bon app'","City":"Marseille","Country":"France"}, {"Name":"Bottom-Dollar Marketse","City":"Tsawassen","Country":"Canada"}, {"Name":"Cactus Comidas para llevar","City":"Buenos Aires","Country":"Argentina"}, {"Name":"Centro comercial Moctezuma","City":"México D.F.","Country":"Mexico"}, {"Name":"Chop-suey Chinese","City":"Bern","Country":"Switzerland"}, {"Name":"Comércio Mineiro","City":"São Paulo","Country":"Brazil"} ] }





let x = ``;
x = x+ `<table border="1px" align="center" cellpadding="10px" cellspacing="10px" class="w-50 table table-bordered table-hover table-striped table-md">
<thead>
    <tr style="background-color: lightgray;">
        <th class="text-center">Sr_no</th>
        <th class="text-center">Name</th>
        <th class="text-center">City</th>
        <th class="text-center">Country</th>
    </tr>
</thead>
<tbody>`;

for(let i = 0 ; i < data.records.length ;i++){
    x =  x+
    `
    <tr>
        <td class="text-center">${i+1}</td>
        <td class="text-center">${data.records[i].Name}</td>
        <td class="text-center">${data.records[i].City}</td>
        <td class="text-center">${data.records[i].Country}</td> 
    </tr>
    `
}

x = x + `</tbody>
    </table>`


console.log(x)
document.getElementById("mytable").innerHTML = x;