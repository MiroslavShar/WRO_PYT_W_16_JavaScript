// Zadanie polega na wczytaniu danych z adresu:
// https://pokeapi.co/api/v2/pokemon
// i wyświetlenie ich nazw w kolejnych li.
//
// Przydatne informacje:
//
// użyj odpowiedniej metody HTTP, jeśli jest potrzebna,
// użyj odpowiednich metod informujących użytkownika o statusie żądania (metody then(), catch()),
// sprawdź w konsoli, jak wyglądają wczytywane dane, czy jest to tablica, string, JSON?
// jeśli dane zostaną poprawnie wczytane, w pętli utwórz elementy li
// do którego wstawisz nazwę pokemona i li wstawisz do ul
//
// Dla chętnych
// API zwraca nam tylko określoną ilość pokemonów
// + linki do API aby pobrać poprzednią / następną pulę.
// Dorób paginację i pobieranie kolejnych pokemonów.

const url = 'https://pokeapi.co/api/v2/pokemon';
const list = document.querySelector('ul');

function fetchData(){
    fetch(url)
        .then(function (data){
            return data.json();
        })
        .then(function (json){

            renderData(json);
        })


}

function renderData(data){
    const pokemons = data.results;

    for (let i = 0; i < pokemons.length; i++){
        const li = document.createElement('li');
        li.innerText = pokemons[i].name;
        list.appendChild(li);

    }
}



fetchData()
