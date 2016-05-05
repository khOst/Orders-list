"use strict";

// Accordion (showing/hiding detailed info).

var items = document.getElementsByClassName("order-heading");

for (var i = items.length - 1; i >= 1; i--) {
  items[i].onclick = function(){
    this.lastElementChild.classList.toggle("rotate-half-PI"); // rotating triangle
    this.nextElementSibling.classList.toggle("show"); // toggling info's opacity and height
  }
}

// Here I wrote some code that sorts dates in the orders list using data-time attribute. 
// The values are compared in miliseconds( new Date().getTime())

var arrow = document.getElementById("arrow"),
    order = document.getElementsByClassName('order'),
    fragment = document.createDocumentFragment(),
    ul = document.getElementById("ul-main");


arrow.onclick = function() {
  this.classList.toggle("rotate-PI"); // rotating arrow
  sortDesc();
}

function sortDesc() {
  var orders = [];

  for (var i = 0; i < order.length; i++) orders.push(order[i]);

  orders.sort(function(a, b) { // sorting
    var a = a.firstElementChild.firstElementChild.getAttribute("data-time"),
        b = b.firstElementChild.firstElementChild.getAttribute("data-time");
    
    if      (a && b && a > b) return a - b; // increasing order
    else if (a && b && a < b) return a + b; // decreasing order
    else throw new Error("Data attribute is not found.");
  });
    
  orders.forEach(function(elem) {
    fragment.appendChild(elem);
  });

  ul.appendChild(fragment);
}

