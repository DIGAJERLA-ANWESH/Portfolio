
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
