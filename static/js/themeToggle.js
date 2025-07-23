(function() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;
  // Determine initial theme: prefer stored setting, otherwise system preference
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  let theme = localStorage.getItem("theme") || (prefersDark ? "dark" : "light");
  if (theme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀";  // sun icon for switching to light
  } else {
    document.body.classList.remove("dark");
    toggleBtn.textContent = "🌙";  // moon icon for switching to dark
  }
  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    if (document.body.classList.toggle("dark")) {
      // switched to dark mode
      toggleBtn.textContent = "☀";
      localStorage.setItem("theme", "dark");
    } else {
      // switched to light mode
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "light");
    }
  });
})();
