
function countHello(count) {
    let counter = 1;
    let intervalID = setInterval(function (){
        console.log('Hello', counter);
    counter ++ // +=1
        if (counter > count) {
            clearInterval(intervalID);
        }
}, 1000);
}

countHello(10)

