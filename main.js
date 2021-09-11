const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

let navLinkHidden = true;

hamburger.addEventListener("click", openNav);

function openNav() {
  navLinkHidden = !navLinkHidden;

  if (navLinkHidden) {
    navLinks.classList.remove("open-nav-links");
    document.documentElement.style.overflowY = "scroll";
    hamburger.classList.add("open-hamburger");
    hamburger.classList.remove("close-hamburger");
    overlay.style.visibility = "hidden";
  } else {
    navLinks.classList.add("open-nav-links");
    document.documentElement.style.overflow = "hidden";
    hamburger.classList.remove("open-hamburger");
    hamburger.classList.add("close-hamburger");
    overlay.style.visibility = "visible";
  }
}
