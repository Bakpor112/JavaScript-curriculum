console.log(document);
//moving step by step to explore the DOM tree
console.log(document.body);
document.body.style.backgroundColor = "lightblue";
console.log(document.body.children[0]);

// moving through the DOM tree with getElementById and querySelector
const title = document.getElementById("title");
console.log(title);

let h1eleme = document.getElementById("title");
console.log(h1eleme);
h1eleme.style.color = "red";

//moving by querrySelector
let pelem = document.querySelector(".content");
console.log(pelem);
pelem.style.fontSize = "30px";
//grab all the elements with the class of content
let allContent = document.querySelectorAll(".content");
console.log(allContent);

//changing the text content of an element
let h2eleme = document.querySelector("h2");
console.log(h2eleme);
h2eleme.textContent = "This is a new heading";

//changing attributes of an element
let linkbtn = document.querySelector(".btn-link");
linkbtn.textContent = "Click me";
linkbtn.href = "https://youtube.com";
linkbtn.setAttribute("target", "_blank");
linkbtn.setAttribute("id", "#link");

//changing classes and styles of an element
pelem.classList.add("Dom");
pelem.classList.toggle("Dom");

//creating, adding and removing an element in javascript
const divelem = document.createElement("div");
const newpelem = document.createElement("p");
newpelem.textContent = "This is a new code";
divelem.appendChild(newpelem)
document.body.appendChild(divelem)
// console.log(divelem)
