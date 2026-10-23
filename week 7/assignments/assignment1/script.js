// ============================================================
// Assignment 1: Function toolkit (10 pts)
// Due: Thu, Oct 1, 11:59 PM · Submit: week7/assignment1
// Rule: use at least one declaration, one expression and one arrow function.
// Add at least 2 test calls per function, with the expected output as a comment.
// ============================================================

// ---------- Part A: Utilities (5 pts) ----------

// calculateArea(length, width = length)
// calculateArea(4, 5) → 20    calculateArea(3) → 9
const length = Number(prompt("Enter length:"));
function calculateArea(length, width = length) {
  return length * width;
}
calculateArea(`${length}`);

// getGrade(score)
const score = Number(prompt("Enter score:"));
function getGrade(score) {
    if (score < 0 || score > 100 || isNaN(score)) {
        return "Invalid score";
    } else if (score >= 70) {
        return "A";
    } else if (score >= 60) {
        return "B";
    } else if (score >= 50) {
        return "C";
    } else if (score >= 45) {
        return "D";
    } else {
        return "F";
    }
}
getGrade(`${score}`);
// A 70+, B 60–69, C 50–59, D 45–49, F below 45
// Return "Invalid score" for anything outside 0–100 (or not a number)
// getGrade(72) → "A"    getGrade(101) → "Invalid score"

// countVowels(text)
// countVowels("JavaScript") → 3
const text = prompt("Enter your text:");
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
function countVowels(text) {
    let count = 0;
    for (let n = 0; n < text.length; n++) {
        if (vowels.includes(text[n])) {
            count++;
        }
    }
    return count;
}
countVowels(`${text}`);

// reverseString(text): use a loop, not .reverse()
// reverseString("Lagos") → "sogaL"
const text2 = prompt("Enter your text:");
function reverseString(Lagos) {
    let reversed = "";
    for (let i = Lagos.length - 1; i >= 0; i--) {
        reversed += Lagos[i];
    }
    return reversed;
}
reverseString(`${text2}`);

// calculateDiscount(price, percent = 10)
function calculateDiscount(price, percent = 10) {
    return price - (price * percent / 100);
}
calculateDiscount(5000);
calculateDiscount(5000, 25);
// calculateDiscount(5000) → 4500    calculateDiscount(5000, 25) → 3750


// ---------- Part B: Refactor (3 pts) ----------
// Rebuild your Week 6 BMI checker as two functions:
// calculateBmi(weight, height) → BMI rounded to 1 decimal; return null for invalid input
// classifyBmi(bmi) → "Underweight" | "Normal" | "Overweight" | "Obese"
// Under 18.5 underweight · 18.5 to 24.9 normal · 25 to 29.9 overweight · 30+ obese
// Test with 3 inputs, e.g. calculateBmi(70, 1.75) → 22.9 → "Normal"


// ---------- Part C: Style explainer (2 pts) ----------
// Write isEven(n) three ways: declaration, expression and arrow.
// In comments, explain when you would choose each style.
