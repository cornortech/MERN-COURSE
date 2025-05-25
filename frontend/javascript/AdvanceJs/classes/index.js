

// class is the blue print of object ;

class Vehicle {

    // when the object is created this constuctor function is exectued
    constructor(name, price,color){

        console.log("object initialzed",name)
        // properties
        this.name = name;
        this.price = price;
        this.color = color
    }

    start(){
        console.log(`${this.name} is started`);
    }
    
    stop(){
        console.log("closed")
    }

}


const vehicle1 = new Vehicle("cf",700000,"black") 
const vehicle2 = new Vehicle("avenger",800000,"black") 



