var backoKiko = {
    firstname:"backo",
    lastname:"kiko",
    address:{
        street:"danov",
        number:"19",
        PO:"1000"
    }
}

function greeting(person){
    console.log("Hello " + person.firstname);
}
 
greeting(backoKiko);
greeting({firstname:"Penko",lastname:"Penkov"});
backoKiko.address2 = {
    house:"dvora"
}
console.log(backoKiko);