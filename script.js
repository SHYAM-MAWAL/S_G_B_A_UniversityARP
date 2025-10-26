document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("modeToggle");
  const body = document.body;
  const storageKey = "shyam-ai-theme";

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    body.classList.toggle("light-mode", isLight);
    toggle.setAttribute("aria-pressed", String(isLight));
    toggle.querySelector(".mode-toggle__icon").textContent = isLight ? "🌞" : "🌙";
  };

  const saved = window.localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    applyTheme("light");
  } else {
    applyTheme("dark");
  }

  toggle.addEventListener("click", () => {
    const isCurrentlyLight = body.classList.contains("light-mode");
    const nextTheme = isCurrentlyLight ? "dark" : "light";
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  });

  const prefersLight = window.matchMedia("(prefers-color-scheme: light)");
  const handlePreferenceChange = (event) => {
    const nextTheme = event.matches ? "light" : "dark";
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  };

  if (typeof prefersLight.addEventListener === "function") {
    prefersLight.addEventListener("change", handlePreferenceChange);
  } else if (typeof prefersLight.addListener === "function") {
    prefersLight.addListener(handlePreferenceChange);
  }
});
