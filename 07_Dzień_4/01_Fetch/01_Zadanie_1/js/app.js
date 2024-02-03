// Stworzysz teraz aplikację do pobierania informacji na temat książki o danym numerze isbn.
//
// W pliku index.html masz przygotowany formularz.
//
// Podepnij do niego zdarzenie, aby w momencie zatwierdzania
// formularza wysłał zapytanie do API o książkę o danym numerze isbn.
//
// Wykorzystaj do tego fetch() i wykonaj zapytanie na adres otwartego API:
//
// https://www.googleapis.com/books/v1/volumes?q=isbn:{numerISBN}
//
// gdzie zamiast numerISBN pobrany z formularza
//
// Otrzymasz w odpowiedzi JSON, a z niego obiekt, w
// którym interesuje Cię tablica pod kluczem items, a w niej
// pierwszy element - obiekt z informacją o książce.
//
// Po pobraniu tych danych utwórz za pomocą JavaScript element h2 z tytułem
// (jest w tym obiekcie pod kluczem volumeInfo.title i wstaw go do elementu o klasie .book-info.
//
// Przetestuj formularz np. dla isbn = 0747532699


const url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:';
const form = document.querySelector('form.jumbotron');
const isbn = document.querySelector('input[name=isbn]');
const section = document.querySelector('section.book-info');

function renderData(data){
    const title = data.items[0].volumeInfo.title;
    const h2 = document.createElement('h2');
    h2.innerText = title;
    section.appendChild(h2);
}

function fetchData(isbn) {
    fetch(url + isbn )
    .then(function(data){
        return data.json();
    })
    .then(function(json){
        // console.log(json.items[0].volumeInfo.title );
        // console.log(json);
        renderData(json);
    })
    .catch(function(err){
        console.log(err);
    })
}
// button.addEventListener("click")
form.addEventListener("submit", function(event){
    event.preventDefault();
    fetchData(isbn.value);

});