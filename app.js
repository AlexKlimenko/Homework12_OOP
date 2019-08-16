//Constructors////////////////////////
//Task 1
class Car {
  constructor(carModel, carAge) {
    this.carModel = carModel;
    this.carAge = carAge;
  }
  getCarModel() {
    return this.carModel[0].toUpperCase() + this.carModel.substr(1);
  }
  get productionYear() {
    return typeof this.carAge !== "number" || this.carAge <= 0
      ? console.log("Check that car age is correct")
      : new Date().getFullYear() - this.carAge;
  }
}

let lexus = new Car("lexus", 2);
// console.log(lexus);
// console.log(lexus.getCarModel()); //method
// console.log(lexus.productionYear); // getter

//Task 2
class Crypt {
  constructor(string) {
    this.string = string;
  }
  getOriginString() {
    return this.string;
  }
  getEncryptString() {
    return this.string
      .split("")
      .reverse()
      .join(" ");
  }
}

let str = new Crypt(
  "Написать конструктор, который умеет элементарно шифровать строки"
);
// console.log(str.getEncryptString());
// console.log(str.getOriginString());

//Classes ES6 Get.Set/////////////////////////////////////////////////
//Task 1
class Component {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
}
const comp = new Component("span");
// console.log(comp);

//Task 2
class Component2 {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
  setText(text) {
    return (this.node.textContent = text);
  }
}
const comp2 = new Component2("span");
// console.log(comp2);
// console.log(
//   comp2.setText(
//     "Написать конструктор, который умеет элементарно шифровать строки"
//   )
// );

//Task 3
class Calculator {
  constructor(firstValue) {
    this._firstValue = firstValue;
  }
  set firstValue(value) {
    this._firstValue = value;
  }
  get currentResult() {
    return this._firstValue;
  }
  add(secondValue) {
    return (this._firstValue += secondValue);
  }
  substract(secondValue) {
    return (this._firstValue -= secondValue);
  }
  multiply(secondValue) {
    return (this._firstValue *= secondValue);
  }
  divide(secondValue) {
    return (this._firstValue /= secondValue);
  }
}

let calc = new Calculator(5);
// console.log(calc.add(10));
// console.log(calc.multiply(3));
// console.log(calc.currentResult);
// console.log((calc.firstValue = 20));
// console.log(calc.divide(5));

//OOP/////////////////////////////////////////////////
//Task 1
//Условие
// function Planet(name) {
//   this.name = name;
//   this.getName = function () {
//       return 'Planet name is ' + this.name;
//   }
// }
//Условие на ES6
class Planet {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return `Planet name is ${this.name}.`;
  }
}

class PlanetWithSatellite extends Planet {
  constructor(name, ...satelliteName) {
    super(name);
    this.satelliteName = satelliteName;
  }
  getSatelliteName() {
    const origRes = super.getName();
    return `${origRes} The satellite: ${this.satelliteName.join(", ")}`;
  }
}

let earth = new Planet("Earth");
// console.log(earth.getName());
let mars = new PlanetWithSatellite("Mars", "Deimos", "Phobos");
// console.log(mars.getName());
// console.log(mars.getSatelliteName());

//Task 2 ES6
class Building {
  constructor(name, floorsNumber) {
    this.name = name;
    this.floorsNumber = floorsNumber;
  }
  getNumberOfFloors() {
    return this.floorsNumber;
  }
  setNumberOfFloors(value) {
    return (this.floorsNumber = value);
  }
}

class House extends Building {
  constructor(name, floorsNumber, appartmentsOnFloor) {
    super(name, floorsNumber);
    this.appartmentsOnFloor = appartmentsOnFloor;
  }
  getNumberOfFloors() {
    return {
      floors: this.floorsNumber,
      appartments: this.floorsNumber * this.appartmentsOnFloor
    };
  }
}

let house = new House("House", 5, 4);
// console.log(house.getNumberOfFloors());

class Mall extends Building {
  constructor(name, floorsNumber, shopsOnFloor) {
    super(name, floorsNumber);
    this.shopsOnFloor = shopsOnFloor;
  }
  getNumberOfFloors() {
    return {
      floors: this.floorsNumber,
      appartments: this.floorsNumber * this.shopsOnFloor
    };
  }
}
let mall = new Mall("Mall", 3, 300);
// console.log(mall.getNumberOfFloors());

//Task 2 ES5 functional inheritance

function Building1(name, numbFloors) {
  this.name = name;
  this.numbFloors = numbFloors;

  this.getNumbFloors = function() {
    return this.numbFloors;
  };
  this.setNumbFloors = function(numb) {
    return (this.numbFloors = numb);
  };
}

function House1(name, numbFloors, apartments) {
  Building1.call(this, name, numbFloors);
  this.apartments = apartments;

  this.getNumbFloors = function() {
    let numbApartments = this.numbFloors * this.apartments;
    result = {
      floors: this.numbFloors,
      numbApartments: numbApartments
    };
    return result;
  };
}

let house1 = new House1("build_2", 9, 5);
// console.log(house1.getNumbFloors());

function Mall1(name, numbFloors, shop) {
  Building1.call(this, name, numbFloors);
  this.shop = shop;

  this.getNumbFloors = function() {
    let numbShop = this.numbFloors * this.shop;
    result = {
      floors: this.numbFloors,
      numShop: numbShop
    };
    return result;
  };
}

let shoppingCenter = new Mall1("build_3", 9, 10);
// console.log(shoppingCenter.getNumbFloors());

//Task 3 ES6
class Furniture {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getInfo() {
    return {
      name: this.name,
      price: this.price
    };
  }
}

let furn = new Furniture("table", 100);
// console.log(furn.getInfo());

class OfficeFurniture extends Furniture {
  constructor(name, price, prop) {
    super(name, price);
    this.prop = prop;
  }

  getInfo() {
    const origRes = super.getInfo();
    origRes.customProperty = this.prop;
    return origRes;
  }
}

let furn2 = new OfficeFurniture("Chair", 200, "leather");
// console.log(furn2.getInfo());

class HomeFurniture extends Furniture {
  constructor(name, price, prop) {
    super(name, price);
    this.prop = prop;
  }

  getInfo() {
    const origRes = super.getInfo();
    origRes.customProperty = this.prop;
    return origRes;
  }
}
let furn3 = new OfficeFurniture("Sofa", 1000, "modern");
// console.log(furn3.getInfo());

//Task 3 ES5 prototype inheritance
function Furniture1(name, price) {
  this.name = name;
  this.price = price;
}

Furniture1.prototype.getInfo = function() {
  return {
    name: this.name,
    price: this.price
  };
};

let furniture = new Furniture1("furniture_1", 3000);
// console.log(furniture.getInfo());

function OfficeFurniture1(name, price, property) {
  Furniture1.call(this, name, price);
  this.category = property;
}

OfficeFurniture1.prototype.getInfo = function() {
  let furnInfo = Furniture1.prototype.getInfo.call(this);
  furnInfo.property = this.category;
  return furnInfo;
};

function HomeFurniture1(name, price, property) {
  Furniture1.call(this, name, price);
  this.slyle = property;
}

HomeFurniture1.prototype.getInfo = function() {
  let furnInfo = Furniture1.prototype.getInfo.call(this);
  furnInfo.property = this.slyle;
  return furnInfo;
};

let officeFurniture = new OfficeFurniture1("office forniture", 1250, "office");
// console.log(officeFurniture.getInfo());
let homeFurniture = new HomeFurniture1("home forniture", 1150, "modern");
// console.log(homeFurniture.getInfo());

//Task 4 ES6
class User {
  constructor(name, dateReg) {
    this.name = name;
    this.dateReg = dateReg;
  }
  getInfo() {
    return {
      name: this.name,
      dateOfRegistration: this.dateReg
    };
  }
}

class Admin extends User {
  constructor(name, dateReg, superAdmin) {
    super(name, dateReg);
    this._superAdmin = superAdmin;
  }
  getInfo() {
    const origRes = super.getInfo();
    origRes.superAdmin = this._superAdmin;
    return origRes;
  }
}

let admin = new Admin("Alex", "2019-08-15", true);
// console.log(admin.getInfo());

class Guest extends User {
  constructor(name, dateReg) {
    super(name, dateReg);
    this.validDate = function() {
      let arrDate = this.dateReg.split("-");
      let newDay = (Number(arrDate[2]) + 7).toString();
      arrDate.splice(2, 1, newDay).join("-");
      return arrDate.join("-");
    };
  }
  getInfo() {
    const origRes = super.getInfo();
    origRes.validDate = this.validDate();
    return origRes;
  }
}

let guest = new Guest("Ivan", "2019-08-15");
// console.log(guest.getInfo());

//Task 4 ES5 prototype inheritance
function User1(name = "defaulName", dateReg) {
  this.name = name;
  this.dateReg = dateReg;
}
User1.prototype.info = function() {
  return {
    name: this.name,
    dateRegistration: this.dateReg
  };
};

function Admin1(name, dateReg, superAdmin) {
  User1.call(this, name, dateReg);
  this._superAdmin = superAdmin;
}
Admin1.prototype = Object.create(User1.prototype);
Admin1.prototype.info = function() {
  var getInfo = User1.prototype.info.call(this);
  getInfo.superAdmin = this._superAdmin;
  return getInfo;
};

function Guest1(name, dateReg) {
  User1.call(this, name, dateReg);
  var self = this;
  this.validDate = function() {
    let date = dateReg.substr(0, 2);
    let month = dateReg.substr(3, 2);
    let year = dateReg.substr(6, 4);
    let getdate = new Date(year, month - 1, date);
    let setDateValid = new Date(getdate.setDate(getdate.getDate() + 7));
    return setDateValid.toLocaleString("ru");
  };
}
Guest1.prototype = Object.create(User1.prototype);
Guest1.prototype.info = function() {
  var getInfo = User1.prototype.info.call(this);
  getInfo.validDate = this.validDate();
  return getInfo;
};

let guest1 = new Guest1("Sergey", "15.08.2019");
// console.log(guest1.info());
let admin1 = new Admin1("Alex", "15.08.2019", true);
// console.log(admin1.info());
