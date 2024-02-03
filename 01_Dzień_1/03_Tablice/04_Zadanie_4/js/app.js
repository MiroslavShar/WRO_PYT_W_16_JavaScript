// Napisz funkcję printTable(array),
// która przyjmuje tylko jeden parametr - tablicę.
// Następnie przy pomocy odpowiedniej metody tablicowej
// przeiteruj (przejdź) po każdym elemencie i wypisz każdy z nich w konsoli.


function printTable(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i])
    }
}

let array = ['Mercedes', 'Alfa-romeo', 'BMW']
printTable(array)
