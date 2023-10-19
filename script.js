
window.addEventListener("scroll", function () {
    const arrow = document.querySelector(".arrow");
    if (window.scrollY > 500) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// JavaScript
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

function checkScroll() {
  elementsToAnimate.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementTop < windowHeight * 0.8) {
      element.classList.add('animate-on-scroll');
    }
  });
}

window.addEventListener('scroll', checkScroll);



