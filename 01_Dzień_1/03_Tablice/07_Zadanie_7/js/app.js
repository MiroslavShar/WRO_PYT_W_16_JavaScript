// Napisz funkcję sortArray, która ma przyjmować tylko jeden
// argument - tablicę zawierającą liczby całkowite.
// Funkcja ta ma zwracać posortowaną rosnąco tablicę.
// Możesz skorzystać z metod tablicowych.

function sortArray(arr){
    let arrSort = arr.sort(function (a,b){return a - b;
    });
    return arrSort
}


console.log(sortArray([145,11,3,64,4,6,10]), '[3,4,6,10,11,64,145]')

