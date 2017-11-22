//More fat arrow function


//Old style of using "this"
var ninja = {
    name: "Ryu",
    chop(n){
        var _this = this; //bind this to variable since it loses scope inside setInterval
        window.setInterval(function(){
            if(n>0){
                console.log(`${_this.name} chopped the enemy`); //use _this
                n--;
            }
        },1000);
    }    
}

ninja.chop(3);

//ES6 style of using "this"
var newNinja = {
    name: "Ryu",
    chop(n){
        window.setInterval(() => {
            if(n>0){
                console.log(`${this.name} chopped the enemy again`); //use "this" since the fat arrow maintains scope 
                n--;
            }
        },1000);
    }    
}
newNinja.chop(3)


