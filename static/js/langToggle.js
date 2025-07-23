document.addEventListener("DOMContentLoaded", function() {
  // Only prompt once per session
  if (!sessionStorage.getItem("langPromptShown")) {
    sessionStorage.setItem("langPromptShown", "true");
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang && userLang.startsWith("zh") && !location.pathname.startsWith("/zh")) {
      const switchMsg = "检测到您的浏览器语言为中文，是否切换到中文版？";
      if (confirm(switchMsg)) {
        // Redirect to corresponding Chinese page
        location.pathname = "/zh" + location.pathname;
      }
    }
  }
});
