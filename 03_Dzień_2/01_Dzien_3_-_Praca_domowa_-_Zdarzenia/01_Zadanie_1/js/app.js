// Stwórz klasę abstrakcyjną Vehicle. Stwórz trzy obiekty:
//
// boat
// car
// plane
// na podstawie odpowiednich klas dziedziczących po Vehicle.
// W odpowiednich klasach stwórz metody, które będą wypisywały w
// konsoli informacje wyróżniające te pojazdy.
// Zrób to w taki sposób, aby obiekt boat nie mógł jeździć ani latać, itp.



class Vehicle {
    constructor(name, model, maxSpeed) {
    this.name = name;
    this.model = model;
    this.maxSpeed = maxSpeed;
    }
    getInfo(){
        console.log(`${this.name}  ${this.model} porusza sie z prędkością ${this.maxSpeed}`)
    }
}

class Boat extends Vehicle{
    constructor(name, model, maxSpeed, numberOfSales) {
        super(name, model, maxSpeed);
        this.numberOfSales = numberOfSales
    }
    sail(){
        console.log(`Łódź ${this.numberOfSales} masztowiec ${this.name} ${this.model} płynie z prędkością ${this.maxSpeed}`)
    }
}

class Car extends Vehicle{
    drive(km){
        console.log(`Samochód ${this.name} ${this.model} jedzie z prędkością ${this.maxSpeed} przez ${km}`)
    }
}

class Plane extends Vehicle{
    fly(){
        console.log(`Samolot ${this.name} ${this.model} leci z prędkością ${this.maxSpeed}`)
    }
}

let car = new Car('Mercedes', 'S600', 240);
let boat = new Boat('Diana', 'Lifter', 35, 4);
let plane = new Plane('Boejng', '737', 950);

car.getInfo();
car.drive(30);

boat.getInfo();
boat.sail();

plane.getInfo();
plane.fly();


