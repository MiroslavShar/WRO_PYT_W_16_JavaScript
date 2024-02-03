// Do pliku js/app.js przekopiuj poniższy kod:
// Następnie sprawdź czy łyżka istnieje.



const spoon = {
  isExist: true,
};

const fork = spoon;
fork.isExist = false;

console.log(spoon);
console.log(fork);
