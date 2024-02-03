// Stwórz obiekt person.
// Dopisz do niego następujące właściwości
// i metodę:
//
// name,
// age,
// sayHello() - wypisującą string "hello"
// Wypisz właściwości w konsoli, wywołaj metodę.

const person = {
    name: 'Vasia',
    age: '38',
    sayHello: function (){
        console.log('Hello')
}
}

console.log(person.name);
console.log(person.age);
person.sayHello()