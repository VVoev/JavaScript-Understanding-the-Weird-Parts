var counter = (function(){
       var privateCounter = 0 ;
    
        function changeBy(val){
            privateCounter+=val;
        }
    
    return{
        increment:()=>{
            changeBy(1);
        },
        decrement:()=>{
            changeBy(-1);
        },
        value :() =>{
            return privateCounter;
        }
    }
}());

console.log(counter.value()); // logs 0
counter.increment();
counter.increment();
console.log(counter.value()); // logs 2
counter.decrement();
console.log(counter.value()); // logs 1

