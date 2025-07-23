// Glossary Tooltip: show definition on hover or focus for terms marked with data-term
document.addEventListener("DOMContentLoaded", function() {
  // Glossary definitions for quick lookup (could also be fetched or embedded via JSON)
  const glossaryData = {
    "APT": {
      "en": "Advanced Persistent Threat – a long-term, stealthy hacking campaign often by a nation-state.",
      "zh": "高级持续性威胁，一种由国家等支持的长期隐蔽黑客攻击。"
    },
    "C2": {
      "en": "Command and Control – the server or channel attackers use to control compromised systems.",
      "zh": "指挥与控制，攻击者用来远程控制被攻陷系统的服务器或通信渠道。"
    },
    "IoC": {
      "en": "Indicator of Compromise – evidence that a system or network might have been breached.",
      "zh": "入侵指标，表明系统或网络可能遭到入侵的证据或迹象。"
    },
    // ... (other glossary terms as needed)
  };

  let tooltipEl = null;
  const terms = document.querySelectorAll("[data-term]");
  terms.forEach(term => {
    // Show tooltip on mouse enter or focus
    term.addEventListener("mouseenter", showTooltip);
    term.addEventListener("focus", showTooltip);
    // Hide tooltip on mouse leave or blur
    term.addEventListener("mouseleave", hideTooltip);
    term.addEventListener("blur", hideTooltip);
  });

  function showTooltip(event) {
    const termElem = event.currentTarget;
    const termKey = termElem.getAttribute("data-term");
    if (!termKey || !glossaryData[termKey]) return;
    // Determine current language (assuming <html lang> is set to "en" or "zh")
    const lang = document.documentElement.getAttribute("lang").startsWith("zh") ? "zh" : "en";
    const definition = glossaryData[termKey][lang] || glossaryData[termKey]["en"];
    // Create tooltip element
    tooltipEl = document.createElement("div");
    tooltipEl.className = "tooltip";
    tooltipEl.textContent = definition;
    document.body.appendChild(tooltipEl);
    // Position the tooltip above or below the term element
    const rect = termElem.getBoundingClientRect();
    const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    // Default position: above the element
    tooltipEl.style.left = (rect.left + scrollX + rect.width/2 - tooltipEl.offsetWidth/2) + "px";
    tooltipEl.style.top = (rect.top + scrollY - tooltipEl.offsetHeight - 8) + "px";
    // If tooltip is cut off at top, position below the element
    if (tooltipEl.getBoundingClientRect().top < 0) {
      tooltipEl.style.top = (rect.bottom + scrollY + 8) + "px";
    }
  }

  function hideTooltip() {
    if (tooltipEl) {
      document.body.removeChild(tooltipEl);
      tooltipEl = null;
    }
  }
});
