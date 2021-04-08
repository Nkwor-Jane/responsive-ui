// nav ul links
const nav = document.querySelector(".nav-links");
// hamburger
const navBtn = document.querySelector(".menu-btn");

navBtn.addEventListener('click', () =>{
    nav.classList.toggle('active');
        console.log("cleic")
});