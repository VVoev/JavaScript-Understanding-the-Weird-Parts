var cat = {
    animal:{
        breed:"streetcat",
        hair:{
            color:"orange",
        },
        isMale:true,
        meow:function(){
            console.log('meow');
        }
    }
}
var catJson = JSON.stringify(cat);
var catJS = JSON.parse(catJson);
console.log(cat);
console.log(catJson);
console.log(catJS);