// Na stronie jest lista, w której musisz wpisać swoje imię i nazwisko,
// swój ulubiony kolor i potrawę.
//
// Wyszukaj odpowiednie elementy (spany) i zapisz je do zmiennych.
// Za pomocą innerText wypełnij w nich odpowiednie informacje.


let lista = document.querySelectorAll('span');
console.log(lista);

let name = document.querySelector('span#name');
console.log(name.id);

let color = document.querySelector('span#fav_color');
console.log(color.id);

let meal = document.querySelector('span#fav_meal');
console.log(meal.id);

name.innerText = 'Mirosław'
console.log(name.innerText);

color.innerText = 'Niebieski'
console.log(color.innerText);

meal.innerText = 'Mięso po Orłowski'
console.log(meal.innerText);