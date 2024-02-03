// Stwórz obiekt car, utwórz dla niego odpowiednie właściwości i metody.
//
// Właściwości:
// brand,
// color,
// numberOfKilometers (na początku 0).
// Metody:
// printCarInfo() - metoda powinna wypisywać informacje o samochodzie (kolor, markę i liczbę przejechanych kilometrów).
// drive(km) - powinna dodawać do przejechanych kilometrów podaną wartość. Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.

const car = {
    brand: 'Mercedes',
    color: 'Czarny',
    numberOfKilometers: 10000,
    preglad: ['01.02.2020', '15.04.2021', '20.04.2022'],
    printCarInfo: function (){
        console.log(`${this.color} ${this.brand}, ${this.numberOfKilometers}, ${this.preglad}`);
    },
    drive: function (km){
        this.numberOfKilometers += km;
    },

    stacja: function (date){
        this.preglad += ',' + date;
    }
};

car.printCarInfo();
car.drive(20)
car.printCarInfo()
car.printCarInfo()
car.stacja('17.09.2024')
car.printCarInfo()


// Zadanie do samodzielnego wykonania
// Do obiektu car dodaj tablicę z listą dat przeglądów (niech będą to zwykłe napisy).
//
// Dodaj też następujące metody:
//
// metodę dodającą wpis do tej tablicy,
// metodę zwracającą wszystkie przeglądy samochodu.
// Użyj słowa kluczowego this, żeby odwołać się do obiektu w środku metody.
//
