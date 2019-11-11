/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var cars = [
    {id: 'Id', year: 'Year', make: 'Make', model: 'Model', price: 'Price'},
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];

function filterBelowPrice(arr, price) {
    return arr.filter(function (car) {
        return car.price < price;
    });
}

function func(arr) {
    const a = arr.map(car => "<tr>" + "<th>" + car.id + "</th><th>" + car.year + "</th><th>" + car.make + "</th><th>" + car.model + "</th><th>" + car.price + "</th>" + "</tr>").join("");
    document.getElementById("table").innerHTML = a;
}
func(cars);

function clickSub() {
    var price = document.getElementById("add").value;
    var newcars = new filterBelowPrice(cars, price);
    func(newcars);
}
var click = document.getElementById("sub");
click.onclick = clickSub;