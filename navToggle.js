// Mobile Nav Toggle: show/hide navigation menu in mobile view
document.addEventListener("DOMContentLoaded", function() {
  const navToggleBtn = document.getElementById("nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!navToggleBtn || !navLinks) return;

  navToggleBtn.addEventListener("click", function() {
    // Toggle a class on nav links container to show or hide it
    navLinks.classList.toggle("open");
    // Optionally, toggle a class on the <body> to prevent background scrolling when menu is open
    document.body.classList.toggle("nav-open", navLinks.classList.contains("open"));
  });
});
