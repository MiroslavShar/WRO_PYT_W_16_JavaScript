// Na stronie znajduje się formularz do zamówienia.
// Jest w nim sekcja odpowiedzialna za wystawienie faktury.
//
// Napisz kod JavaScript, który spowoduje, że sekcja
// ta jest widoczna tylko i wyłącznie wtedy, kiedy
// zaznaczony jest checkbox "Chcę otrzymać fakturę".
//
// Ma to również działać przy starcie strony:
// sekcja z danymi do faktury powinna być ukryta!



const invoiceData = document.querySelector('[id=invoiceData]');
console.log(invoiceData);


const checkBox = document.getElementById('invoice');
console.log(checkBox);

invoiceData.style.display = 'none';

checkBox.addEventListener('click', function (){
    if (checkBox.checked){
        invoiceData.style.display = 'block';

    }
    else {
        invoiceData.style.display = 'none'
    }
});



