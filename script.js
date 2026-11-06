/* =====================================================
   MOBILE MENU
===================================================== */

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* =====================================================
   BACK TO TOP
===================================================== */

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

const menuLinks = document.querySelectorAll(".menu-links a");

menuLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.remove("open");
    icon.classList.remove("open");
  });
});
