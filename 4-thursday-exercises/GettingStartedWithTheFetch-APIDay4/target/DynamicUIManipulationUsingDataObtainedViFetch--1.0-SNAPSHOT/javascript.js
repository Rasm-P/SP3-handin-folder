/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var users = fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            users = data;
        })

function clickSub() {
    var name = document.getElementById("add").value;
    for (i = 0; i < users.length; i++) {
        if (users[i].id.toString() === name.toString()) {
            document.getElementById("div").innerHTML = "<div id='div'\><p id='name'></p><p id='phone'></p><h3>Address</h3><p id='street'></p><p id='city'></p><p id='zip'></p><p id='geo'></p></div>"
            document.getElementById("name").innerText = users[i].name.toString();
            document.getElementById("phone").innerText = users[i].phone.toString();
            document.getElementById("street").innerText = users[i].address.street.toString();
            document.getElementById("city").innerText = users[i].address.city.toString();
            document.getElementById("zip").innerText = users[i].address.zipcode.toString();
            document.getElementById("geo").innerText = users[i].address.geo.lat.toString() + " " + users[i].address.geo.lng.toString();
        }
    }
}
var click = document.getElementById("sub");
click.onclick = clickSub;

function func(arr) {
    const a = arr.map(car => "<table><tr>" + "<th>" + car.name + "</th><th>" + car.phone + "</th>" + "</tr></table>").join("");
    document.getElementById("div").innerHTML = a;
}

function clickSubAll() {
    var list = users;
    func(list);
}
var click = document.getElementById("subAll");
click.onclick = clickSubAll;