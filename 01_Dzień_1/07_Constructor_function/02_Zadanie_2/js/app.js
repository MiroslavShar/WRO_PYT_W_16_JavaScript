// W pliku js/app.js możesz znaleźć przykładowy konstruktor dla robota.
// Konstruktor oczekuje, że podasz tylko imię robota.
//
// Metody dodane są do prototypu funkcji.
//
// Utwórz kilka robotów i poszukaj, czy w napisanym kodzie nie ma błędów.
//
// Sprawdź w konsoli jak wyglądają poszczególne roboty oraz sam konstruktor.

const Robot = function (name) {
  this.name = name;
  this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
  if (this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  } else {
    console.log("Robot " + this.name + " is broken");
  }
};

Robot.prototype.changeName = function (newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function () {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};

let robot = new Robot('T-1000');
robot.sayHi('people');
robot.fixIt();
robot.sayHi('people');
robot.changeName('t-800');
robot.sayHi('people');