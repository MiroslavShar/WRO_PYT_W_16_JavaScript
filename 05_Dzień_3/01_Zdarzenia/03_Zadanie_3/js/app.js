// const hurra = document.getElementsByClassName('container');
//
// hurra.addEventListener('click',
//     function (event){
//     console.log('Hura! Działa!');
// })

document.addEventListener("DOMContentLoaded", function() {
    const hurra = document.getElementById('mainBtn');
    console.log(hurra);

    hurra.addEventListener('click',
        function () {
            console.log('Hura! Działa!');
        })
})