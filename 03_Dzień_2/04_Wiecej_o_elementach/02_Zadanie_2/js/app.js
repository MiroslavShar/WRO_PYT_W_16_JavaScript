// Na stronie są trzy obrazki z ikonami najpopularniejszych przeglądarek internetowych.
// Niestety zarówno obrazki, jak i linki prowadzące do ich stron zawierają błędy.
// Napisz kod JavaScript, który wprowadzi następujące zmiany:
//
// Poprawi elementy tak, żeby do każdej przeglądarki
// było podpięte odpowiednie logo (obrazek jest nastawiany za pomocą background-image).
// Poprawi linki tak, żeby każdy miał poprawny opis i atrybut href.
// Poprawi szerokość elementu o klasie chrome (powinno być 100px).


let chromeImage = document.querySelector("div.chrome");

 chromeImage.style.width = "100px";
 let chromeLink = document.querySelector("[href='https://www.google.pl/chrome/browser/desktop/index.html']");

 chromeLink.innerText = 'Chrome';

 let edgeImage = document.querySelector("div.edge");

 edgeImage.style.backgroundImage = "url('img/edge.jpg')";

 let edgeLink = document.querySelector('[href="www.github.pl"]');

 edgeLink.setAttribute('href', 'https://www.microsoft.com/pl-pl/edge/download?form=MA13FJ');