// Pod adresem https://fer-api.coderslab.pl/v1/holidays jest przechowywana baza świąt
// państwowych różnych krajów. Aby z niej skorzystać należy przesłać specjalny klucz (key):
// e92601251-c0a2-4s63-v73f-54041195480f. API wymaga również podania kodu kraju (country).
// Do dyspozycji mamy trzy:
//
// Polska (PL)
// Wielka Brytania (GB)
// Stany Zjednoczone (US)
//
// Za pomocą funkcji fetch() wczytaj do elementu ul wszystkie daty świąt (jako elementy li).
// Aby poprawnie wczytać dane w funkcji fetch() trzeba w odpowiedni sposób skonstruować adres
// URL naszego żądania, np.: https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL.
//
// Każdą nazwę święta wczytaj do elementu li jako element h3.holiday-name,
// a jego datę wczytaj do elementu li jako element time.holiday-date.
//
// Podpowiedzi:
//
// Wczytaj dane i zobacz w konsoli jak wyglądają, pozwoli Ci to ustalić czego należy użyć,
// aby dostać się do nazw i dat świąt. Możesz tutaj wykorzystać też zakładkę Network.
// Dodatkowe
// Dorób na stronie formularz, który zawiera element select w którym będzie można wybrać
// z którego kraju mają pojawiać się święta. Wybór jakiegoś elementu option ma spowodować
// ponowne wysłanie zapytania i utworzenie na nowo elementów listy. Domyślnie wybraną opcją ma być PL.

const url = 'https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL'
const list = document.getElementById('app');
function fetchData(){
    fetch(url)
        .then(function (data){
            return data.json()
        })
        .then(function (json){
            renderDate(json);
        })
}

function renderDate(date){
    const holidays = date.holidays;

    for(let i = 0; i < holidays.length; i++){
        const li = document.createElement('li');
        li.innerHTML = `<h3 class ='holiday-name'> ${holidays[i].name}</h3> - <time class ='holiday-date'>${holidays[i].date}</time>`;

        list.appendChild(li);
    }


}



fetchData();