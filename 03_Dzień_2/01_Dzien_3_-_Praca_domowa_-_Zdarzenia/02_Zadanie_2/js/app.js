// Część 1
// Stwórz klasę Duck. Będzie to klasa abstrakcyjna, z której będą dziedziczyć inne kaczki.
// Stwórz wewnątrz tej klasy konstruktor i metody:


// konstruktor - którego zadaniem będzie ustawienie typu kaczki na "ordinary duck" np. this.type = "ordinary duck"
// sound() - wypisuje "Quack quack"
// swim() - wypisuje "I'm swimming..."
// print() - wypisuje "Looks like ordinary duck". Skorzystaj z ustawienia type do wypisania typu kaczki.
// Stwórz obiekt donaldDuck. Wywołaj dla niego wszystkie metody.


class Duck{
    constructor() {
        this.type = "ordinary duck";
    }
    sound(){
        console.log('Quack quack')
    }
    swim(){
        console.log('I\'m swimming...')
    }
    print(){
        console.log(`Looks like ${this.type}`)
    }
    fly(){
        console.log('I\'m flying...')
    }
}

// Część 2
// Na bazie klasy Duck stwórz kolejną o nazwie WildDuck.
// Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "wild".
// Stwórz obiekt daffyDuck. Wywołaj dla niego wszystkie metody.

class WildDuck extends Duck{
    constructor() {
        super();
        this.type = 'wild';
    }


}

let daffyDuck = new WildDuck();

daffyDuck.sound();
daffyDuck.swim();
daffyDuck.print();
daffyDuck.fly();


// Część 3
// Na bazie klasy Duck stwórz kolejną o nazwie MallardDuck.
// Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print() typ kaczki zmienił się na "mallard".
// Stwórz obiekt daisyDuck. Wywołaj dla niego wszystkie metody.

class MallardDuck extends Duck{
    constructor() {
        super();
        this.type = 'mallard'
    }


}

let daisyDuck = new MallardDuck();
daisyDuck.sound();
daisyDuck.swim();
daisyDuck.print();
daisyDuck.fly();

// Część 4
// Stworzyłeś klasę Duck. Mogą z niej dziedziczyć wszystkie kaczki.
// Twoim zadaniem teraz jest dodanie do odpowiedniej klasy metody fly().
// Metoda ma wypisywać w konsoli tekst "I'm flying...".


// Część 5
// Na bazie klasy Duck stwórz kolejną o nazwie RubberDuck.
// Nadpisz odpowiednio konstruktor, tak aby podczas wywoływania metody print()
// typ kaczki zmienił się na "rubber". Stwórz obiekt howardTheDuck.
// Wywołaj dla niego wszystkie metody. Czy widzisz coś niepokojącego?
class RubberDuck extends Duck{
    constructor() {
        super();
        this.type = 'rubber'
    }
    fly() {
        console.log('Rubber ducks cant fly!');
    }
}
let howardTheDuck = new RubberDuck();
howardTheDuck.sound();
howardTheDuck.swim();
howardTheDuck.print();
howardTheDuck.fly();

// Twoja gumowa kaczka potrafi latać!
//
// Nadpisz odpowiednio metodę fly() tak, aby po jej wywołaniu w
// przypadku gumowej kaczki wypisywał się w konsoli tekst "Rubber ducks can't fly!".