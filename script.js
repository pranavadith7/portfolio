document.getElementById("menu-icon").addEventListener("click", function() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("clicked");
    var navLinks = navbar.querySelector(".nav-links");
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

document.addEventListener('DOMContentLoaded', () => {
    showContent('about', 'About');
});

function showContent(sectionId, headingText) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.add('active');
    }

    // Update the heading text
    const heading = document.getElementById('content-heading');
    if (heading) {
        heading.textContent = headingText;
    }
}
