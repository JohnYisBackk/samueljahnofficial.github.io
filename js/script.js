var typed = new Typed(".input", {
    strings:["Designer","Developer"],
    typeSpeed: 120,
    backSpeed: 110,
    loop: true
});


AOS.init();


hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");

    window.onscroll = () =>{
        navBar.classList.remove('active');
        navBar.classList.remove('active');
    }
}
