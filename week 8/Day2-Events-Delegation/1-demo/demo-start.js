// =============================================================
// Day 2 Demo: Event Lab
// Live-code each station in order. Follow DEMO-GUIDE.md.
// Reference answer: demo-finished.js
// =============================================================

// STATION 1: click → addEventListener("click", handler)
//grab the html element()
const btn = document.getElementById("like-btn");
const likeCount = document.getElementById("like-count")

<<<<<<< Updated upstream
let count = 0;
function handleClick(){
    count = count +1;
    likeCount.textContent = count;
    if (count === 10){
        likeCount.textContent = "you have reach your limit"
        btn.disabled = true;
    };
    
};
btn.addEventListener("click", handleClick);
=======
const nameInput = document.getElementById("name-input");
const namePreview = document.getElementById("name-preview");
const keyLog = document.getElementById("key-log");

nameInput.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  namePreview.textContent = value || "stranger";
});function

nameInput.addEventListener("keydown", (event) => {
  keyLog.textContent = `Last key: ${event.key}`;
  if (event.key === "Escape") {
    nameInput.value = "";
    namePreview.textContent = "stranger";
  }
});
>>>>>>> Stashed changes

// STATION 2: input + keydown → the event object (event.target.value, event.key)
const inputElem = document.getElementById("name-input");
const nameDisplay = document.getElementById("name-preview");
const keyElem = document.getElementById("key-log");

<<<<<<< Updated upstream
function handleInput(event){
    const inputValue = event.target.value.trim();
    nameDisplay.textContent = inputValue;
}
function handleKeydown (event){
    keyElem.textContent = `you pressed: ${event.key}`;
}

inputElem.addEventListener("input", handleInput);
inputElem.addEventListener("keydown", handleKeydown);
=======
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("form-message");

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = `✅ Thanks! We'll write to ${emailInput.value}.`;
  signupForm.reset();
});
>>>>>>> Stashed changes

// STATION 3: submit → event.preventDefault()
const formElem = document.getElementById("signup-form")
const emailInput = document.getElementById("email")
const submitMessage = document.getElementById("form-message")

function handleSubmit(event){
    event.preventDefault();
    submitMessage.textContent = "thanks for subscribing";
    formElem.reset();
}
formElem.addEventListener("submit", handleSubmit)

// STATION 4: bubbling → listeners on outer, middle, inner; stopPropagation();
const 
// STATION 5: delegation → ONE listener on the <ul>, use event.target.closest()

