function helloworld() {
    console.log('Helloworld');
}
helloworld()

//setTimeout - wykona się 1 raz

setTimeout(helloworld , 5000) // czas w ms 1000 = 1s

//setInterval - wykonuje się cyklicznie

let interval = setInterval(helloworld, 1000);

setTimeout(function (){
    clearInterval(intervalId);
}, 10_000)
