
/*
Prototype is basically an object that exhibits the characteristics of their parents object.
They are basically create a chain of inheritence .
*/



function animal (name){
    this.name = name
}

animal.prototype.nature = function (){
    console.log(this.name + " is too cute.")
}

const dog = new animal ("Goldy")
dog.nature()