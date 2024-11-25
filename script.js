const navMenu = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const buttonMenuIcon = document.querySelector("i");

navMenu.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    buttonMenuIcon.setAttribute("class", isOpen ? "ri-close-fill" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    buttonMenuIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    duration: 1000,
    origin: "bottom",
};

ScrollReveal().reveal("nav", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".hero-content", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".tech-stack h1", {
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".tech-stack h2", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".stack", {
    ...scrollRevealOption,
    delay: 1800,
});
ScrollReveal().reveal(".projects h1", {
    ...scrollRevealOption,
    delay: 800,
});
ScrollReveal().reveal(".projects h2", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    delay: 1200,
});

ScrollReveal().reveal(".bar", {
    ...scrollRevealOption,
    delay: 500,
});

