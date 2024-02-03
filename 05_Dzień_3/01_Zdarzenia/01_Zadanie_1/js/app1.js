const parents = document.querySelectorAll('.parent');

parents.forEach(function (parent){
    parent.addEventListener('mouseover', function (){
        this.querySelector('.children').style.display = 'block';
    })
    parent.addEventListener('mouseout', function (){
        this.querySelector('.children').style.display = 'none';

    })
})