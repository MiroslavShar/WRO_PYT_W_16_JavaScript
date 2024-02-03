// Stwórz obiekt, który będzie przetrzymywał
// Twój ulubiony przepis. Obiekt powinien
// mieć własność
// title (string),
// servings (number) oraz
// ingredients (tablica stringów).
//
// Dodaj pole ingredients poza ciałem obiektu.
//
// Wypisz w konsoli te wszystkie informacje.

const przepis = {
    title: 'Miaso po Orlowski',
    servings: '5'
}

przepis.ingredients = ['mięso', 'ser', 'ziemniaki', 'sos'];

console.log(przepis.title);
console.log(przepis.servings);
console.log(przepis.ingredients);



