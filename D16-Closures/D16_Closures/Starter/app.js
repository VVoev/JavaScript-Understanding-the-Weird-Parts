function incrementNumber(number){
    
    return function(){
        ++number;
        console.log(number);
    }
}

var c = incrementNumber(0);
c();
c();c();c();c();c();
