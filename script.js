document.addEventListener("DOMContentLoaded", function () {
    var coll = document.getElementsByClassName("collapsible");
    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active-achievement");
            var content = this.nextElementSibling;
            var icon = this.querySelector("i");
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove("fa-arrow-down");
                icon.classList.add("fa-arrow-right");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.remove("fa-arrow-right");
                icon.classList.add("fa-arrow-down");
            }
        });
    }
});

const btn = document.getElementById('submit');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_f9ma0pd';
        const templateID = 'template_tmsmmvc';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send';
                alert('Email Sent!');
            }, (err) => {
                btn.value = 'Send';
                alert(JSON.stringify(err));
            });
    });

document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
    this.reset();
});


document.getElementById("menu-icon").addEventListener("click", function () {
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
