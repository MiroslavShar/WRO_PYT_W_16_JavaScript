// Przeanalizuj kod, który znajduje się w pliku js/app.js.
//
// Jest tam stworzony obiekt calculator,
// który posiada jedną metodę save(newA,newB).
// Zadaniem tej metody jest zapisanie dla tego obiektu pod pola a i b dwóch liczb.
//
// Dopisz metody sum oraz multiply,
// tak aby zwracały sumę oraz iloczyn tych dwóch
// liczb ustawionych w metodzie save.


const calculator = {
  save: function (newA, newB) {
    this.a = newA;
    this.b = newB;
  },
  sum: function (){
    return this.a + this.b
  },
  multiply: function (){
    return this.a * this.b
  }
};

calculator.save(2, 3);
console.log(calculator.sum());
console.log(calculator.multiply());
