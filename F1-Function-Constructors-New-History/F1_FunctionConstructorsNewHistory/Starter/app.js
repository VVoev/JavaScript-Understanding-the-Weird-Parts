function Person(firstname,lastname){
    
    console.log(this);  
    this.firstname = firstname;
    this.lastname = lastname;
}

var john = new Person("John","Doe");
console.log(john);

var jane = new Person('Jane',"Mei");
console.log(jane);