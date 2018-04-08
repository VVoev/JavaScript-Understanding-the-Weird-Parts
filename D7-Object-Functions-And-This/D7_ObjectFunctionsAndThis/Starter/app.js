var c = {
    name:"the c object",
    log:function(){
        
        var self = this;
        self.name = "update the object c"
        console.log(self);
        
        var setname = function(newname){
            this.name = newname;
        }
        
        setname('updated once again');
        console.log(this);
    }
}

c.log();