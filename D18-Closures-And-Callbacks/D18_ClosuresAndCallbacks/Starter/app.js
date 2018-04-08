function sayHiLater(){
    
    var greeting = 'hi';
    
    setTimeout(function(){
        console.log(greeting);
    },1000);
}

//sayHiLater();


function tellmewhenDone(cb){
    var a = 1000;
    var b= 2000;
    cb(a+b);
}

tellmewhenDone((result)=>{
    console.log('Im done' + result);
})

tellmewhenDone(()=>{
    console.log('All done');
})
var number = 0;
function incrementNumber(cb){

    setTimeout(()=>{
        number+=1;
        console.log(number);
        cb(number);
    },1000)
}

incrementNumber((num)=>{
    incrementNumber((num)=>{
        incrementNumber((num)=>{
            incrementNumber((num)=>{
                incrementNumber((num)=>{
                    incrementNumber((num)=>{
                         incrementNumber((num)=>{
                              incrementNumber((num)=>{
                            });
                        });
                    });
                });
            });
        });
    });
});