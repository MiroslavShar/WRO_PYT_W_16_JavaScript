// Napisz funkcję getEvenAverage, która ma przyjmować tylko jeden argument - tablicę.
// Funkcja ta ma zwracać średnią wartość parzystych liczb z tej tablicy, z
// aokrągloną do trzech miejsc po przecinku.
// Dla uproszczenia można założyć, że tablica ma w sobie tylko liczby.
// Jeśli w tablicy nie ma parzystych liczb niech zwraca null.


function getEvenAverage(array) {

    let avg = array.filter(function (a, b, c) {
        return a % 2 === 0;
    });
    if (avg.length > 0) {
        let table = avg.reduce(function (a, b) {
            return a + b
        }) / avg.length;
        return table.toFixed(3)
        }
    return null


}

//
console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]), '4')
console.log(getEvenAverage([1, 1, 1, 1]), 'null')
console.log(getEvenAverage([2, 8, 3, 7, 4]), '4.667')
