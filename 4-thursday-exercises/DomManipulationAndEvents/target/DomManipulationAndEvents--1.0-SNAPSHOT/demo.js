/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//function click() {
//    document.getElementById("text").innerHTML="Hello class";
//}
//var btn = document.getElementById("btn");
//btn.onclick = click; //ikke clock() da vi ikke ønsker at kalde en function der ikke har noget i, vi ønsker bare at kalde refferencen.

var elements = document.getElementsByTagName("div");
for (i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "yellow";
}

function click() {
    var style1 = document.getElementById("id1").style;
    style1.backgroundColor = "green";
    var style2 = document.getElementById("id2").style;
    style2.backgroundColor = "blue";
    var style3 = document.getElementById("id3").style;
    style3.backgroundColor = "red";

}
var btn = document.getElementById("btn1");
btn.onclick = click; //ikke clock() da vi ikke ønsker at kalde en function der ikke har noget i, vi ønsker bare at kalde refferencen.