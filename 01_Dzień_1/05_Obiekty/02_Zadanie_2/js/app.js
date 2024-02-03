// Stwórz obiekt timeMachine. Dopisz do niego następujące właściwości:
//
// shape - string,
// model - string,
// run(date, place) - metoda, dzięki której można się przenieść w czasie. Argument date to data, do jakiej chcemy się przenieść, a place to miejsce, do którego chcemy się przenieść. Oba argumenty to stringi.
// Wypisz w konsoli wszystkie właściwości i uruchom metodę run.
//
//

const timeMachine = {
    shape: 'car',
    model: 'Delorian',
    run: function (date, place){
        console.log(`Przeniosłeś się w czasie do ${date}! Jesteś w ${place}!`);

    }
}
console.log('kształt', timeMachine.shape);
console.log('model', timeMachine.model);

timeMachine.run('01.09.1939', 'Berlin')