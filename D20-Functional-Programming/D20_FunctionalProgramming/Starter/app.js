var person = {
    firstname:"John",
    lastname:"Doe",
    getFullName:function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1,lang2){
    console.log('Logged ' + this.getFullName())
}

var logPersonName = logName.bind(person);
logPersonName();


function multiPly(a,b){
    return a*b;
}

var multipleByTwo = multiPly.bind(this,2);
console.log(multipleByTwo(10));