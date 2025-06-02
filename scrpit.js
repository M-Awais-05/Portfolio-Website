// Mobile menu toggle
function myMenuFunction() {
    const navMenu = document.getElementById('myNavManu');
    navMenu.classList.toggle('active');
}

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('myNavManu').classList.remove('active');
    });
});
// ---------------Mode toggle --------------------
const body = document.querySelector("body"),
    toggleSwith = document.getElementById("toggle-switch");

toggleSwith.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// --------------------Typing-----------------
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000
})
// ------------------------scrol Animation ---------------------
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,

})
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 300 });
sr.reveal(".text-btn", { delay: 300 });
sr.reveal(".social_icons", { delay: 300 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 300 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true
})

srLeft.reveal(".about-info", { delay: 300 });
srLeft.reveal(".contact-info", { delay: 300 });


const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset: true
})

srRight.reveal(".skill", { delay: 300 });
srRight.reveal(".Skills-box", { delay: 300 });
srRight.reveal(".form-control", { delay: 300 });


// Select the form element and the feedback message container
const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

// Listen for the form's submit event
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    feedback.style.color = 'green';
    feedback.textContent = 'Sending...';
    feedback.style.display = 'block'; // show it immediately


    // Collect plain form values
    const formData = new URLSearchParams(new FormData(form));

    try {
        // Submit using fetch with URL-encoded data
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            feedback.textContent = 'Thank you for your message! I will get back to you soon.';
            form.reset();
        } else {
            const data = await response.json();
            feedback.style.color = 'red';
            if (data.errors) {
                feedback.textContent = data.errors.map(error => error.message).join(', ');
            } else {
                feedback.textContent = 'Oops! There was a problem submitting your form.';
            }
        }
    } catch (error) {
        feedback.style.color = 'red';
        feedback.textContent = 'Oops! Network error. Please try again later.';
    }

    feedback.style.display = 'block';
});
