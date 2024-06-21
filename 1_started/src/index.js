import _ from 'lodash';

document.getElementById("buttonClick").addEventListener('click', function () {
  
  const element = document.getElementById("h1_element");

  element.innerHTML = "Button Clicked!";

  const listFruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  const ul = document.getElementById("shoppingList");

  _.forEach(listFruits, function (fruit) {
    const li = document.createElement("li");
    li.innerHTML = fruit;
    ul.appendChild(li);
  });
}) 