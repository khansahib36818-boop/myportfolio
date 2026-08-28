function showMessage() {
    alert("Thank you for visiting my portfolio!");
}

function showProject(projectName) {
    alert("You selected: " + projectName);
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    let button = document.getElementById("themeButton");

    if (document.body.classList.contains("dark-mode")) {
        button.innerHTML = "☀️ Light Mode";
    } else {
        button.innerHTML = "🌙 Dark Mode";
    }
}

// Mobile Menu
function toggleMenu() {
    let navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}

// Scroll Animation
const animatedSections = document.querySelectorAll(".animate");

function checkScroll() {
    animatedSections.forEach(function(section) {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", checkScroll);
checkScroll();

// Typing Animation
const text = "I am a Digital Marketer";
let index = 0;

function typeText() {
    if (index < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();
