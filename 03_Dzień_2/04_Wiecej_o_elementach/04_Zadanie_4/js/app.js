// Na stronie jest proste menu. Zarówno kod HTML,
// jak i CSS jest już do niego przygotowany.
// Niestety ktoś zapomniał dodać odpowiednie klasy do odpowiednich elementów.
//
// Wyszukaj element ul w sekcji .exercise i dodaj mu klasę menu.
// Wyszukaj wszystkie elementy li w sekcji .exercise
// i dodaj im klasę menuElement (użyj do tego pętli).
//
// Uważaj, żeby nie wykasować klasy selected.
// Zauważ, że jeden z elementów ma czerwony kolor tła.
// Jest to spowodowane tym, że ma klasę error.
// Zabierz mu ją (najlepiej, jeżeli zabierzesz tę klasę wszystkim elementom, które ją mają).

let ul = document.querySelector('.exercise ul');
console.log(ul);

ul.classList.add('menu');

let li = document.querySelectorAll('.exercise li');
console.log(li);
var error = 'error'
for(let i = 0; i < li.length; i++){
    li[i].classList.remove('error');
    li[i].classList.add('menuElement');

}
console.log(li)
