function firstFunc() {
  const someInt = 1;

  function secondFunc() {
    console.log(someInt);

    const otherInt = 3;
    console.log(otherInt);
  }

  secondFunc();


}

firstFunc();