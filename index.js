// 1. Dynamic Typing Effect (Pure JS Custom Code)
const dynamicText = document.querySelector(".dynamic-text");
const words = ["Educator", "Mentor", "Content Creator", "Life Guide"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        dynamicText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        dynamicText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Pause at full word
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length; // Cycle to next word
        typeSpeed = 500; 
    }

    setTimeout(typeEffect, typeSpeed);
}

// Start typing effect on load
document.addEventListener("DOMContentLoaded", typeEffect);


// 2. Active Link Highlight on Scroll (Scroll Spy)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};


// 3. Mobile Navigation Menu Toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark"); // Icons changes cross/bars
    navbar.classList.toggle("active");
};

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    };
});


// 4. Contact Form Verification Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, Professor ${name}! Your demo contact message simulation was successful.`);
    this.reset();
});