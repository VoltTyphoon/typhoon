// Accordion Toggle: show/hide content sections (e.g., IoC list)
document.addEventListener("DOMContentLoaded", function() {
  const accordions = document.querySelectorAll(".accordion-toggle");
  accordions.forEach(toggle => {
    toggle.addEventListener("click", function() {
      const content = toggle.nextElementSibling;
      if (!content) return;
      const isOpen = content.classList.contains("open");
      // Toggle the display of the accordion content
      content.classList.toggle("open");
      // Update ARIA attribute for accessibility
      toggle.setAttribute("aria-expanded", !isOpen);
    });
  });
});
