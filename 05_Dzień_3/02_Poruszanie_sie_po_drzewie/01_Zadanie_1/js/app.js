// Znajdź i zapisz do zmiennych następujące elementy:
// Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
const first = document.querySelector('.first').firstElementChild.children[2];
console.log("🚀 ~ first:", first);
// Element o id second -> jego rodzic -> jego czwarte dziecko.
const second = document.querySelector('#second').parentElement.children[3];
console.log("🚀 ~ second:", second);
// Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół).
const children = document.querySelector('[data-ex=third]').parentElement.parentElement.lastElementChild.firstElementChild.children;
const third = children[ Math.floor(children.length / 2)];
console.log("🚀 ~ third:", third);

// Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
const fourth = document.querySelector('div.forth').parentElement.querySelector('article').querySelectorAll('p')[1];
console.log("🚀 ~ fourth:", fourth);