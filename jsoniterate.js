var jsonfor=[
    {
        "id" : "fsd1",
        "name" : " vicky",
        "degree" : " msc"
    },
    {
        "id" : "fsd2",
        "name" : " jai",
        "degree" :" BE"
    },
];

// for
for ( var i = 0; i < jsonfor.length; i++) {
    var obj = jsonfor[i];
    console.log(jsonfor[i].id);
    console.log(jsonfor[i].name);
    console.log(jsonfor[i].degree);
}

//for each
jsonfor.forEach(function(obj)
{
    console.log(obj.name);
});

//for of
var key;
var nam= "";
for (let x of jsonfor[key].id){
    nam += x;
}
console.log(nam);
