// -----------------------Responsive Manu button
function myMenuFunction(){
    var manuBtn = document.getElementById("myNavManu");
    if(manuBtn.className == "nav-manu"){
        manuBtn.className = " responsive";
    }
    else{
        manuBtn.className = "nav_manu";
    }
}

// ---------------Mode toggle --------------------
const body = document.querySelector("body"),
    toggleSwith = document.getElementById("toggle-switch");

toggleSwith.addEventListener("click", ()=>{
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
    origin:"top",
    distance: "80px",
    duration: 2000,
    reset:true,

})
sr.reveal(".featured-name", {delay: 100 });
sr.reveal(".text-info", {delay: 200 });
sr.reveal(".text-btn", {delay: 200 });
sr.reveal(".social_icons", {delay: 200 });
sr.reveal(".featured-image", {delay: 320 });

sr.reveal(".project-box", { interval: 200});
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset:true
})

srLeft.reveal(".about-info", {delay:200});
srLeft.reveal(".contact-info", {delay:200});


const srRight = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 2000,
    reset:true
})

srRight.reveal(".skill", {delay:200});
srRight.reveal(".Skills-box", {delay:200});
srRight.reveal(".form-control", {delay:200});


