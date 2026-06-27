console.log("JavaScript Connected");

// 1st hai querySelector

// Grab ur name heading and log it 
const myName = document.querySelector("h1");
console.log(myName); 
// This will grab n log the skill section by the section id 
const skillSection = document.querySelector("#skills");
console.log(skillSection);

const navLinks = document.querySelectorAll("nav a");
console.log("Nav Links Found", navLinks.length);

// 2nd hai textContent 

const heading = document.querySelector("h1");
console.log("Current name", heading.textContent);
// Name change 
heading.textContent = "Harsh Vardhan Upadhyay 🚀";

const footer = document.querySelector("footer p");
console.log("Footer says", footer.textContent);
footer.textContent = "Harsh © " + new Date().getFullYear();

// 3rd is classList

const firstCard = document.querySelector(".project-card");
// We added the highlight class 
// firstCard.classList.add("highlight");
console.log("Has Highlight?", firstCard.classList.contains("highlight"));
// we remove it 
firstCard.classList.remove("highlight");
console.log("Has Highlight?", firstCard.classList.contains("highlight"));

firstCard.classList.toggle("highlight");

// 4th createElement and appendChild
// AddJed JavaScript to your skills list
const skillsList = document.querySelector("#skills ul");

const newSkill = document.createElement("li"); // make the element
newSkill.textContent = "JavaScript";           // set its content/text

skillsList.appendChild(newSkill);              // add it to the list 
console.log("Skill added! Total Skills:", skillsList.children.length);

// 5th addEventListener

const projectCards = document.querySelectorAll(".project-card");
// Add a click listener to each one
projectCards.forEach((card) => {
    card.addEventListener("click", (e) => {
    
        card.classList.toggle("highlight");
// e.target tell us in console what was clicked 
        console.log("You clicked:", e.target.tagName);
        console.log("Card title:", card.querySelector("h3").textContent);
        
    });
});

// 6th input = submit events  

const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const formMsg = document.querySelector("#form-msg");

// input event
nameInput.addEventListener("input", () => {
    console.log("Name so far;", nameInput.value);
});
// submit event
form.addEventListener("submit", (e) => {
    e.preventDefault();  // it will stop the page refresh 

const name = nameInput.value.trim();
const email = emailInput.value.trim();

if (name === "" || email === "") {
    formMsg.textContent = "Please fill in both fields.";
    formMsg.style.color = "red";
    return;
}

formMsg.textContent = "Thanks " + name + "I'll reply to " + email + "soon";
formMsg.style.color = "green";

form.reset();
console.log("Form sunbmitted by:", name, email);
});