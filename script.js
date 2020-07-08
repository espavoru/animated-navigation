const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navItems = document.querySelectorAll("#overlay li");

// Control Navigation Animation
const navAnimation = (direction1, direction2) => {
  navItems.forEach((nav, i) => {
    nav.classList.replace(
      `slide-${direction1}-${i + 1}`,
      `slide-${direction2}-${i + 1}`
    );
  });
};

// Toggle Menu
const toggleNav = () => {
  // Toggle: Menu Bars Open/Closed
  menuBars.classList.toggle("change");

  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
};

// Toggle menu on click
const clickHandler = (e) => {
  if (e.target.closest("#menu-bars") || e.target.closest("#overlay li")) {
    toggleNav();
  }
};

// Event listener
document.addEventListener("click", clickHandler);
