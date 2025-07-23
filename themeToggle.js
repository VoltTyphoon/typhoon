// Theme Toggle: switch between light and dark themes, with system preference default
document.addEventListener("DOMContentLoaded", function() {
  const themeToggleBtn = document.getElementById("theme-toggle");
  const rootElement = document.documentElement;
  if (!themeToggleBtn) return;

  // Apply saved theme from localStorage if present
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    rootElement.classList.add("theme-dark");
  } else if (savedTheme === "light") {
    rootElement.classList.add("theme-light");
  }
  // (If no saved theme, the site will fall back to CSS media query preference)

  themeToggleBtn.addEventListener("click", function() {
    if (rootElement.classList.contains("theme-dark")) {
      // Currently in dark mode (overridden) -> switch to light mode override
      rootElement.classList.remove("theme-dark");
      rootElement.classList.add("theme-light");
      localStorage.setItem("theme", "light");
    } else if (rootElement.classList.contains("theme-light")) {
      // Currently in light mode override -> switch to dark mode override
      rootElement.classList.remove("theme-light");
      rootElement.classList.add("theme-dark");
      localStorage.setItem("theme", "dark");
    } else {
      // No override set (following system preference) -> toggle based on current computed scheme
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        // System is dark, toggle to light
        rootElement.classList.add("theme-light");
        localStorage.setItem("theme", "light");
      } else {
        // System is light, toggle to dark
        rootElement.classList.add("theme-dark");
        localStorage.setItem("theme", "dark");
      }
    }
  });
});
