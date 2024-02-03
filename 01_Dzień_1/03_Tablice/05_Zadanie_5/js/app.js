// Napisz funkcję multiply(array).
// Funkcja ma przyjmować tylko jeden argument - tablicę.
// Następnie funkcja multiply ma pomnożyć wszystkie liczby znajdujące się w tablicy
// przy pomocy odpowiedniej metody tablicowej i zwrócić wynik.

function multiply(array){
    console.log(array)
    var wynnik = 1
    for (let i = 0; i < array.length; i++){
        let a = array[i];
        wynnik *= a;
    }
    return wynnik
}


console.log(multiply([1,2,3,4,5,6,7]), '5040')
console.log(multiply([1,1,1,1]), '1')
console.log(multiply([2,8,3,7]), '336')

