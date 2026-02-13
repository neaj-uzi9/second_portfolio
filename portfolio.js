let menu = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text', {
        strings: ['Web Developer', 'Graphic Designer', 'Mob Developer (front-end)', 'UI/UX Designer'],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 1200,
        loop: true
    });

const darkIcon = document.getElementById("darkMode-icon");

darkIcon.onclick = () => {
    document.body.classList.toggle("dark");
    darkIcon.classList.toggle("bx-sun");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    darkIcon.classList.add("bx-sun");
}

/* Scroll reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/Active link/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


/*EmailJs */

emailjs.init("9R-6_6xH2JkT2FAdn");

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_3n55lvs",
        "template_oj198k2",
        this
    ).then(() => {
        alert("Message sent successfully!");
        this.reset();
    }, () => {
        alert("Failed to send message");
    });
});