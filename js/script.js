// ================= NAVBAR SCROLL =================
window.addEventListener("scroll", () => {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// ================= FADE-IN ANIMATION =================
const fadeElements = document.querySelectorAll(".fade-in");

function reveal() {
    let trigger = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        let top = el.getBoundingClientRect().top;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}


// ================= SLIDE-DOWN CARDS =================
const slideElements = document.querySelectorAll(".slide-down");

function slideReveal() {
    let trigger = window.innerHeight * 0.85;

    slideElements.forEach((el, index) => {
        let top = el.getBoundingClientRect().top;

        if (top < trigger) {
            setTimeout(() => {
                el.classList.add("show");
            }, index * 200); // stagger delay
        }
    });
}


// ================= TYPING EFFECT =================
const text = "Welcome to ClaroMUN";
let index = 0;
const speed = 80;

function typeEffect() {
    let target = document.getElementById("typing-text");

    // Safety check (prevents errors if element missing)
    if (!target) return;

    if (index < text.length) {
        target.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}


// ================= LOAD + SCROLL EVENTS =================
window.addEventListener("load", () => {
    reveal();
    slideReveal();
    typeEffect();
});

window.addEventListener("scroll", () => {
    reveal();
    slideReveal();
});