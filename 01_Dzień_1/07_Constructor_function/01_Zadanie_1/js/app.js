// W pliku js/app.js stwórz konstruktor Basket.
// Na jego bazie stwórz obiekt, który będzie miał następujące pola:
//
// products - tablica z wszystkimi produktami
// sum - kwota do zapłaty za wszystkie produkty
// Do prototypu konstruktora dodaj metody:
//
// addProduct(name, price), która jako parametry będzie
// przyjmowała nazwę produktu oraz jego cenę.
// Cenę podawaj jako typ number, a nazwę jako string.
// Umieść te dane jako obiekt w tablicy this.products.
// showBasket(), której zadaniem będzie wyświetlenie wszystkich
// produktów z koszyka wraz ceną, oraz kwotą do zapłaty.
// Przykładowe wywołanie:

function Basket(){
    this.products = [];
    this.sum = 0
}

Basket.prototype.addProduct = function (name, price){
    this.products.push({name:name, price:price});
    this.sum += price;
};
Basket.prototype.showBasket = function (){
    this.products.forEach(function (element){
        console.log(element);
    });
    console.log('Kwota do zapłaty:', this.sum);
};

const aliceBasket = new Basket();
aliceBasket.addProduct("pomidor",10);
aliceBasket.addProduct("arbuz",40);
aliceBasket.showBasket();

const bruceBasket = new Basket();
bruceBasket.addProduct("rice", 10);
bruceBasket.addProduct("grzyby mun",50);
bruceBasket.addProduct("tofu",20);
bruceBasket.showBasket();
