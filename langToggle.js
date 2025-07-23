// Language Toggle: switches between English and Chinese versions of the current page
document.addEventListener("DOMContentLoaded", function() {
  const langToggleLink = document.getElementById("lang-toggle");
  if (!langToggleLink) return;
  langToggleLink.addEventListener("click", function(event) {
    event.preventDefault();
    const currentPath = window.location.pathname;
    if (currentPath.startsWith("/en/")) {
      // Switch to Chinese (zh) while keeping the rest of the path
      const newPath = currentPath.replace("/en/", "/zh/");
      window.location.pathname = newPath;
    } else if (currentPath.startsWith("/zh/")) {
      // Switch to English (en)
      const newPath = currentPath.replace("/zh/", "/en/");
      window.location.pathname = newPath;
    } else {
      // If path has no prefix (e.g. homepage), determine current language by <html lang>
      const htmlLang = document.documentElement.getAttribute("lang");
      if (htmlLang && htmlLang.startsWith("zh")) {
        // current is Chinese, so go to English
        window.location.pathname = "/en" + currentPath;
      } else {
        // current is English or unspecified, go to Chinese
        window.location.pathname = "/zh" + currentPath;
      }
    }
  });
});
