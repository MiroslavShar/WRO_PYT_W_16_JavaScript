// Wypisz w konsoli:
//
// Ile na stronie znajduje się elementów div (jest ich 20),
// Ile na stronie znajduje się elementów o klasie offers (jest ich 12),
// Ile na stronie znajduje się elementów, które posiadają atrybut href (jest ich 13).

let divs = document.querySelectorAll('div');
console.log(divs.length);

let offers = document.querySelectorAll('.offers');
console.log(offers.length);

let offers2 = document.getElementsByClassName('offers');
console.log(offers2.length);

let hrefs = document.querySelectorAll('[href]');
console.log(hrefs.length);
