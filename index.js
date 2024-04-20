let dayNight = document.querySelector(".dayNight");
let banner=document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    // Toggle night mode class on the content section
    banner.classList.toggle("night");
});

let typingEffect = new Typed("#text", {
    strings: ["Web Developer", "Coder"],
    loop: true,
    typeSpeed: 30,       // Slower typing speed (characters per second)
    backSpeed: 15,       // Slower backspacing speed (characters per second)
    startDelay: 1500,    // Delay before typing starts (in milliseconds)
    backDelay: 2000      // Delay before backspacing starts (in milliseconds)
});


