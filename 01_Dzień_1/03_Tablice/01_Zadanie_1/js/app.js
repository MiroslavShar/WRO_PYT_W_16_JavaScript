// Napisz funkcję distFromAverage, która ma przyjmować tylko jeden argument - tablicę.
// Funkcja ta ma zwracać też tablicę.
// Zwracana tablica powinna mieć w sobie różnicę pomiędzy liczbą z danej komórki a średnią wartością tablicy.
// Np.

function distFromAverage(arr){
    let avg = arr.reduce(function (a,b){return a + b}) / arr.length;
    return arr.map(function (element) {
        return Math.abs(element - avg);
    })
}
console.log(distFromAverage([1,2,3,4,5,6,7]), '[3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4')
console.log(distFromAverage([1,1,1,1]), '[0,0,0,0] (średnia z tablicy wejściowej to 1')
console.log(distFromAverage([2,8,3,7]), '[3,3,2,2] (średnia z tablicy wejściowej to 5')


