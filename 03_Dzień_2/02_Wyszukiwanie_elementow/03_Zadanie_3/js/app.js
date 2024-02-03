// Wyszukaj na stronie następujące elementy i zapisz
// je do odpowiednio nazwanych zmiennych:
//
// Element o id home (na dwa sposoby).
// Pierwszy element li posiadający atrybut data-direction.
// Pierwszy element o klasie block.
// Pamiętaj, żeby za każdym razem sprawdzić,
// czy wczytałeś odpowiedni element.
// Pamiętaj, żeby używać funkcji, które wyszukują tylko jeden element.

let id = document.getElementById('home');
console.log(id);

let li = document.querySelector('li [data-direction]');
console.log(li);

let firstLi = document.querySelector('[data-direction]');
console.log(firstLi);

let block = document.querySelector('.block');
console.log(block)

