var arr = [10,20,30];
console.log(arr);


function mapForEach(arr,fn){
    var arr1 = [];
    for(var i=0; i< arr.length;i+=1){
    arr1.push(
        fn(arr[i])
    );
    }
    return arr1;
}

var arr2 = mapForEach(arr,function(item){
                      return item*2;
})
console.log(arr2);

var arr3 = mapForEach(arr,function(item){
    return item>20;
})

console.log(arr3);

var checkPastLimit =  function(limiter,item){
    return item>limiter;
}

var arr4 = mapForEach(arr,checkPastLimit.bind(this,15));
console.log(arr4);

var checkPastLimiter = function(limiter){
    return function(limiter,item){
        return item>limiter;
    }.bind(this,limiter);
}

var arr5 = mapForEach(arr,checkPastLimiter(12));
console.log(arr5);

