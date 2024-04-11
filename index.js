let dayNight = document.querySelector(".dayNight");
let banner=document.querySelector(".banner");

dayNight.addEventListener("click", () => {
    // Toggle night mode class on the content section
    banner.classList.toggle("night");
});

let typingEffect=new Typed("#text",{
    strings:["Web Developer","Coder"],
    loop:true,
    typingSpeed:100,
    backSpeed:50,
    backDelay:1000
});

