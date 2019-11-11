/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//1)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
//Concat does not change the existing arrays, but instead returns a new array.

//b)
var all = boys.concat(girls);
console.log(all);

//c)
var commaSeparated = all.join();
console.log(commaSeparated);
var hyphenSeparated = all.join('-');
console.log(hyphenSeparated);

//d)
all.push("Lone","Gitte");
console.log(all);

//e)
all.unshift("Hans", "Kurt");
console.log(all);

//f)
all.shift();
console.log(all);

//g)
all.pop();
console.log(all);

//h)
all.splice(3,2);
console.log(all);

//i)
all.reverse();
console.log(all);

//j)
all.sort();
console.log(all);

//k)
all.sort(function(a, b) {
  var nameA = a.toUpperCase();
  var nameB = b.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
});
console.log(all);

//l)
const allCallback = all.map(a => a.toUpperCase());
console.log(allCallback);

//m)
function filterItems(arr, query) {
  return arr.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
}
console.log(filterItems(all, 'l'));