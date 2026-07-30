const loadScript = (src) => new Promise((resolve, reject) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = resolve;
  script.onerror = reject;
  document.body.appendChild(script);
});

loadScript("./app-core.js")
  .then(() => loadScript("./app-extended.js"))
  .then(() => loadScript("./app-motion.js"))
  .then(() => loadScript("./app-components.js"))
  .then(() => loadScript("./app-component-fixes.js"))
  .catch((error) => console.error("Failed to load the term catalog", error));
