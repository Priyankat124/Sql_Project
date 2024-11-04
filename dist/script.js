function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
}

const sr = ScrollReveal({
    distance: '50px',
    duration: 1000,
    easing: 'ease-out',
    origin: 'bottom',
    delay: 100,
    reset: true 
});

sr.reveal('.all_section');

