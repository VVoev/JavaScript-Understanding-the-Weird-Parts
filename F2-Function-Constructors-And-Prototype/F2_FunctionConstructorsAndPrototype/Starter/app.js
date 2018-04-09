function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getSmeshnoName = function(){
    return this.firstname + " " + this.lastname
}

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);


var arr = [10,20,30];
arr.Count = arr.length;
Array.prototype.Baxur = this.length;