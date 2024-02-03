
// Stwórz tablicę z listą swoich ulubionych owoców.
// Następnie:
// Wypisz pierwszy owoc w konsoli.
// Wypisz ostatni owoc w konsoli
// (skorzystaj z atrybutu length).
// W pętli wypisz wszystkie owoce
// (skorzystaj z atrybutu length).

// let arr = [1, 2, 3, 4]
//
// for(let i=0; i < arr.length; i++) {
//     console.log('licznik i = ', i);
//     console.log('element z tablicy o indexie i = ', arr[i]);
// }
//
// arr.forEach(function(element, index){
//     console.log('licznik i = ', index);
//     console.log('element z tablicy o indexie i = ', element);
// })

let fruits = ['pomarancza', 'mandarynka', 'banany', 'jabłka']
console.log(fruits[0])

for(var i = 0; i < fruits.length; i++){
    console.log(fruits[i])
    if (i == fruits.length - 1) {
        console.log(fruits[i])
    }
}
