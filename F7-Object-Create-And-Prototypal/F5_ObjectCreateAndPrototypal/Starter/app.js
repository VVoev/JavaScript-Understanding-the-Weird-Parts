var person = {
    firstname:"Default",
    lastname:"Default",
    greet:function(){
    console.log('Hi ' + this.firstname);
    }
}



var john = Object.create(person);
john.firstname = "John"
john.lastname = "Doe"

console.log(person);
console.log(john);
john.greet();