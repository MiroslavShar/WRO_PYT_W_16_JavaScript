// W pliku znajduje się kilka przycisków (są to odpowiednio ostylowane linki).
// Po kliknięciu w którykolwiek z nich jego rodzic ma zmienić kolor tła (na losowy).
// Rozwiązanie musi spełniać następujące założenia:
//
// Na wszystkie przyciski musi być założony ten sam event.
// Rodzic ma być wyszukiwany zależnie od położenia this.
// Kolor tła musi być losowy.
// Hint: Żeby uzyskać losowy kolor, użyj poniższego kodu:


const buttons = document.querySelectorAll('[id*=button]');
console.log(buttons)
const parents = document.querySelectorAll('[id*=box]');
console.log(parents)


parents.forEach(function (button){
    button.addEventListener('click', function (event){
        event.preventDefault();
        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = randomColor;
        })
    })


const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
