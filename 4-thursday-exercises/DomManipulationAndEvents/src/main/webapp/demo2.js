/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function clickDivOne(e) {
    var id = e.target.id;
    console.log("Hi from " + id);
    document.getElementById("paragraph").innerText="Hi from " + id;
}
var divClick = document.getElementById("outer");
divClick.onclick = clickDivOne;

