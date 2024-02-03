// Na stronie znajduje się select i trzy obrazki.
// Każdy z obrazków jest przypisany do jednego z wyborów w
// selekcie. Napisz kod javaScript w taki sposób,
// żeby widoczny był tylko ten obrazek, który został wybrany.
//
// Na start powinien być wyświetlony obrazek Windows.
// Następnie po wyborze innego i zatwierdzeniu
// przyciskiem Zatwierdź zmień wyświetlany obrazek.


const windows = document.querySelector('[alt=Windows]');
const ubuntu = document.querySelector('[alt=Ubuntu]');
const macOs = document.querySelector('[alt=MacOS]');
const option = document.querySelector('.form-control');
const buttonAccept = document.querySelector('form button.btn.btn-primary')



macOs.classList.add('d-none');
ubuntu.classList.add('d-none');



buttonAccept.addEventListener('click', function (event){
    event.preventDefault();
    console.log(option.value)
    if (option.value === 'Ubuntu'){
        macOs.classList.add('d-none');
        windows.classList.add('d-none');
        ubuntu.classList.remove('d-none');

    }
    else if (option.value === 'MacOS'){
        macOs.classList.remove('d-none');
        windows.classList.add('d-none');
        ubuntu.classList.add('d-none');

    }
    else {
        windows.classList.remove('d-none');
        ubuntu.classList.add('d-none');
        macOs.classList.add('d-none');


    }
})


