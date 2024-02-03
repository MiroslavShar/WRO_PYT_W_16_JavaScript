// Na stronie znajduje się tabela z wynikami w
// lokalnych mistrzostwach piłkarskich.
// Poniżej znajduje się formularz, który wypełniają
// wszyscy sędziowie po ukończonych rozgrywkach.
// Napisz kod JavaScript w taki sposób,
// żeby po wybraniu odpowiednich drużyn nastąpiła walidacja:
//
// Obie drużyny muszą być różne.
// Liczba goli powinna być nieujemna.
// Jeżeli formularz zostanie zweryfikowany poprawnie,
// odpowiednia informacja o wyniku spotkania powinna pojawić
// się w tabeli jako kolejny wiersz.


class Form{
    constructor() {
        this.team1 = document.getElementById('team1');
        this.team2 = document.getElementById('team2');
        this.points1 = document.getElementById('points1');
        this.points2 = document.getElementById('points2');
    }

    getData(){
        return{
            team1: this.team1.value,
            team2: this.team2.value,
            points1: this.points1.value,
            points2: this.points2.value
        }
    }

    isNameValid(){
        const { team1, team2 } = form.getData();
        return team1.length > 0 && team2.length > 0 && team1 !== team2;
    }

    isPointsvalid(){
        const { points1, points2 } = form.getData();
        return points1 >= 0 && points2 >= 0;
    }




}

class Table{
        constructor() {
            this.tbody = document.querySelector('table.table tbody');

        }

        addRow(data){
            const {team1, team2, points1, points2} = data;
            const newTr = document.createElement('tr');
            newTr.innerHTML = `<td>${team1}</td><td>${team2}</td><td>${points1} - ${points2}</td>`
            this.tbody.appendChild(newTr);
        }
}

const form = new Form();
const table = new Table();

const button = document.querySelector('button');

button.addEventListener('click', function (event){
    event.preventDefault();
    if (form.isNameValid() && form.isPointsvalid()){
        table.addRow(form.getData());
    }
    else {
        console.log('nie dziala')
    }
})



