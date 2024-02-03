// Wyszukaj na stronie następujące elementy i
// zapisz je do odpowiednio nazwanych zmiennych:
//
// Wszystkie elementy li znajdujące się w tagu nav z klasą navigation.
// Wszystkie paragrafy należące do wszystkich elementów div.
// Wszystkie divy znajdujące się w tagu article.


let li = document.querySelectorAll('li');
console.log(li.length);

let p = document.querySelectorAll('div p');
console.log(p.length);

let div = document.querySelectorAll('article div');
console.log(div.length);