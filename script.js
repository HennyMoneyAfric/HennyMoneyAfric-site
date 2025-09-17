// Simple example JS
console.log("Website loaded successfully!");

// Example: add a click event
document.addEventListener("DOMContentLoaded", () => {
    const hero = document.querySelector(".hero");
    hero.addEventListener("click", () => {
        alert("You clicked the hero section!");
    });
});