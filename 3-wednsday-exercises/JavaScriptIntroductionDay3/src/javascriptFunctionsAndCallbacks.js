/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Function Declaration
//Observe: no return type, no type on parameters
function add(n1, n2) {
    return n1 + n2;
}

//Function Expression
var sub = function (n1, n2) {
    return n1 - n2
}

//Callback example
var cb = function (n1, n2, callback) {
    if (typeof n1 !== "number" || typeof n2 !== "number" || typeof callback !== "function") {
        throw new Error('Whoops!');
    }
    return "Result from the two numbers: " + n1 + "+" + n2 + "=" + callback(n1, n2);
};

var mul = function (n1, n2) {
    return n1 * n2;
}

var div = function (n1, n2) {
    return n1 / n2
};

try {
    console.log(cb(3, 4, mul));
    console.log(cb(3, 4, div));
    console.log(add(1, 2))     // This will print 3.
    console.log(add)          // This will print "[Function: add]" and represents the method being poined at.
    console.log(add(1, 2, 3)); // This will print 3.
    console.log(add(1));	  // This will print nan since we only provide 1 parmeter.	
    console.log(cb(3, 3, add)); // This will print "Result from the two numbers: 3 + 3 = 6".
    console.log(cb(4, 3, sub)); // This will print "Result from the two numbers: 4 + 3 = 1".
    console.log(cb(3, 3, add())); // This will print en error message that says callback is not a function. We are trying to call it as a undefiend function, wher we want to call a reffence to add, and not add().
    console.log(cb(3, "hh", add));// This will print "Result from the two numbers: 3+hh=3hh.
} catch (e) {
    console.log("Rip this failed!");
}





var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];
var filterNames = names.filter(word => word.length <= 3);
names.forEach(function (entry) {
    console.log(entry);
});
filterNames.forEach(function (entry) {
    console.log(entry);
});

const NamesList = "<ul>" + names.map(name => "<li>" + name + "</li>").join('') + "<ul>";
console.log(NamesList);
//This string <ul><li></li><ul> represents a (bulleted) list in HTML and would be the nautal way to desplay our javascript array.






var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

function filterYear(arr) {
    return arr.filter(function (car) {
        return car.year > 1999;
    });
}
console.log(filterYear(cars));

function filterMake(arr) {
    return arr.filter(function (car) {
        return car.make === 'Volvo';
    });
}
console.log(filterMake(cars));

function filterBelowPrice(arr) {
    return arr.filter(function (car) {
        return car.price < 5000;
    });
}
console.log(filterBelowPrice(cars));

function oneMethodFilter(arr, type) {
    //return arr.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ");").join(" ");
    return arr.filter(function (car) {
        if (type === "year") {
            return car.year > 1999;
        }
        if (type === "make") {
            return car.make === 'Volvo';
        }
        if (type === "price") {
            return car.price < 5000;
        }
    });
}
console.log(oneMethodFilter(cars, "year"));
console.log(oneMethodFilter(cars, "make"));
console.log(oneMethodFilter(cars, "price"));


function sqlStatement(cars) {
    return cars.map(car => "INSERT INTO cars (id,year,make,model,price) VALUES (" + car.id + "," + car.year + "," + car.make + "," + car.model + "," + car.price + ");").join(" ");
}
console.log(sqlStatement(cars));






var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");
//This code will output in the following order: right!
//aaaaaaaaa
//ddddddddd
//fffffffff
//eeeeeeeee
//bbbbbbbbb





function Person(name) {
    this.name = name;
    var self = this;
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + self.name);  //This part wil wait fo 2 seconds before getting written to the console.
    }.bind(this), 2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + name);  //Name is undifined.
//A function starting with a capital letter is a constructor. Anything that's not a constructor usually starts with lowercase. We use this to create a Person object.

var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
console.log("I'm global: " + name);  //Now it has the correctly assigned name.


var greeter = function () {
    console.log(this.message);
};
var comp1 = {message: "Hello World"};
var comp2 = {message: "Hi"};

var g1 = greeter.bind(comp1);//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2);//And here another “this”
setTimeout(g1, 500);
setTimeout(g2, 1000);





var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
for (prop in person) {
    console.log(prop, person[prop]);
}
delete person.eyeColor;
person.car = "Volvo";
for (prop in person) {
    console.log(prop, person[prop]);
}

function NewPerson(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
Object.defineProperties(NewPerson.prototype, {
    detales: {
        get: function () {
            return this.firstName + " " + this.lastName + " " + this.age;
        }
    }
});
var person = new NewPerson("Kurt", "Wonnegut", 40);
console.log(person.detales);