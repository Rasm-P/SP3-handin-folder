/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var display = [];
var clear = false;

function clickDivOne(e) {
    var val = e.target.innerText;
    if (val.toString() === "=") {
        clickEquals()
    } else {
        if (clear === true) {
            display = [];
            clear = false;
        }
        console.log(val);
        display.push(val);
        document.getElementById("display").innerHTML = display.join("");
    }
}
var divClick = document.getElementById("buttons");
divClick.onclick = clickDivOne;

function clickEquals() {
    var equals = display;
    console.log(eval(equals.join("")));
    document.getElementById("display").innerHTML = eval(equals.join(""))
    clear = true;
}
var divClick = document.getElementById("calculate");
divClick.onclick = clickEquals;