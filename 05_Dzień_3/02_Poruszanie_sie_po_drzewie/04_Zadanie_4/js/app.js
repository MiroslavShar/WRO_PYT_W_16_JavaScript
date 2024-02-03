// W pliku znajdują się trzy listy (każda osadzona w elemencie div).
// Po najechaniu myszką na element div zmienić się mają kolory tła elementów jego listy.
// Odpowiednio:
//
// Pierwszy element w liście ma mieć kolor czerwony.
// Ostatni element w liście ma mieć kolor niebieski.
// Wszystkie inne elementy mają mieć kolor zielony.
// Rozwiązanie musi spełniać następujące założenia:
//
// Na wszystkie divy musi być założony ten sam event.
// Elementy listy mają być wyszukane w zależności od this.

const divs = document.querySelectorAll('div.listContainer');

divs.forEach(function(div){
    div.addEventListener("mouseover", function(){
        const lis = this.firstElementChild.children;
        lis[0].style.backgroundColor = 'red';
        lis[lis.length -1].style.backgroundColor = 'blue';

        for(let i=1; i < lis.length-1; i++){
            lis[i].style.backgroundColor = 'green';
        }

    });
})