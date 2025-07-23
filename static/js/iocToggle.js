document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll(".ioc-cat-header");
  headers.forEach(header => {
    header.addEventListener("click", () => {
      const categoryDiv = header.parentElement;
      const indicator = header.querySelector(".toggle-indicator");
      if (categoryDiv.classList.toggle("open")) {
        // expanded
        if (indicator) indicator.textContent = "[-]";
      } else {
        // collapsed
        if (indicator) indicator.textContent = "[+]";
      }
    });
  });
});
