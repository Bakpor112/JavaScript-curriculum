// =============================================================
// Day 1 Class Activity: Fix the Recipe Card
// Work in pairs. ~25 minutes.
// Rule: do NOT touch index.html. Every fix happens here in JavaScript.
// Read ACTIVITY.md for the full brief.
// =============================================================

// TASK 1: Change the title to "Jollof Rice" and the browser tab title to
//         "Jollof Rice · Recipe".
const titleHead = document.head.children[2];
titleHead.textContent = "Jellof Rice . Recipe"

const mainHeadElem = document.querySelector(".recipe-title")
mainHeadElem.textContent = "Jellof Rice"
// console.log(titleHead)


// TASK 2: Set servings to 4 and time to "45 mins".
const serve = document.getElementById("servings");
document.getElementById("servings").textContent = 4;
const time = document.getElementById("time");
document.getElementById("time").textContent = "45 mins";


// TASK 3: Fix the photo. Use this src and a helpful alt text:
//         https://placehold.co/600x300/e67e22/ffffff?text=Jollof+Rice
const image = document.getElementById("recipe-photo");
image.src = "https://placehold.co/600x300/e67e22/ffffff?text=Jollof+Rice";
image.alt = "photo of Jellof rice";

// TASK 4: Remove the ad banner from the page.
const banner = document.querySelector(".ad-banner")
banner.style.display = "none";


// TASK 5: Select ALL ingredient <li> items. Add the class "spicy" to every
//         ingredient whose text includes the word "pepper".
//         Hint: element.textContent.toLowerCase().includes("pepper")
const ingredient = document.querySelectorAll("#ingredients li");
ingredient[2].classList.add("spicy");
ingredient[4].classList.add("spicy");
// console.log(ingredient)

// TASK 6: Add two new ingredients to the END of the list: "Chicken stock"
//         and "Bay leaves". Give each one the class "new-item".
const ul = document.querySelector("ul");

const li6 = document.createElement("li");
li6.textContent = "Chicken Stock";
li6.classList.add("new-item");

const li7 = document.createElement("li");
li7.textContent = "Bay Leaves";
li7.classList.add("new-item");   

ul.appendChild(li6);
ul.appendChild(li7);

// TASK 7: Show the number of ingredients inside the <span class="count">
//         in this format: "(7 items)". Count them with JavaScript, don't hard-code 7.
// const ulItems = document.querySelectorAll("#ingredients li")
// const countSpan = document.querySelector(".count")
// console.log(countSpan)


// TASK 8: Add a 4th step at the end: "Cover and cook on low heat for 30 minutes."
const newol = document.querySelector("ol")

const ol4 = document.createElement("li")
ol4.textContent = "Cover and cook on low heat for 30 minutes."

newol.appendChild(ol4)

// TASK 9: Replace the note text with "Notes: Tastes even better the next day."
//         and set a data attribute on the recipe: data-difficulty="data-difficulty".

const newNotes = document.querySelector(".note")
newNotes.textContent = "Notes: Tastes even better the next day."
const recipe = document.querySelector(".recipe")
recipe.setAttribute("data-difficulty", "medium")
console.log(recipe)

// TASK 10: Add the class "done" to the whole recipe card to show you finished!
const recipeCard = document.querySelector(".recipe");
recipeCard.classList.add("done");



// ⭐ BONUS: Use the DOM tree (parentElement / children / nextElementSibling)
//          to log the <h2> that comes right BEFORE the ingredients list,
//          WITHOUT using a class or id selector for the <h2>.
