document.addEventListener("DOMContentLoaded",
    function() {
        const menuM = document.querySelector("#menu");
        const paragrafG = document.querySelector("p");

        menuM.addEventListener('click', function (event){
            console.log(event)
            }
        )

        menu.classList.add("menu");
        paragrafG.innerHTML = "A to jest paragraf w zadaniu 2";
    })
