const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");

  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.remove("overlay-slide-left");
    overlay.classList.add("overlay-slide-right");
  } else {
    // Animate Out - Overlay
    overlay.classList.remove("overlay-slide-right");
    overlay.classList.add("overlay-slide-left");
  }
};

const clickHandler = (e) => {
  const target = e.target;

  if (
    target.closest("#menu-bars") ||
    target.closest("#nav-1") ||
    target.closest("#nav-2") ||
    target.closest("#nav-3") ||
    target.closest("#nav-4") ||
    target.closest("#nav-5")
  ) {
    toggleNav();
  }
};

document.addEventListener("click", clickHandler);
