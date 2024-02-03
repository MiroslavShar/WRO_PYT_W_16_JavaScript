// Wyszukaj na stronie i zapisz do odpowiednio nazwanej
// zmiennej tag article o klasie first.
// W kolejnym etapie:
// wypisz w konsoli, ile elementów h2 znajduje się w tym tagu.
// Pamiętaj, żeby za każdym razem sprawdzić, czy
// wczytałeś odpowiednie elementy.


let article = document.querySelector('article.first');
console.log(article);

let h2 = article.querySelectorAll('h2');
console.log(h2.length);
