(function enableMotionPreviews() {
  const previousBindDemo = bindDemo;
  let timers = [];
  let activeTerm = null;
  let paused = false;

  function clearMotionTimers() {
    timers.forEach((timer) => {
      window.clearTimeout(timer);
      window.clearInterval(timer);
    });
    timers = [];
  }

  function later(callback, delay) {
    const timer = window.setTimeout(callback, delay);
    timers.push(timer);
    return timer;
  }

  function repeat(callback, delay) {
    const timer = window.setInterval(callback, delay);
    timers.push(timer);
    return timer;
  }

  function restartClass(target, className) {
    if (!target || paused) return;
    target.classList.remove(className);
    void target.offsetWidth;
    target.classList.add(className);
  }

  function autoToggle(selector, delay = 1450) {
    const target = els.canvas.querySelector(selector);
    if (!target) return;
    const toggle = () => {
      if (!paused) target.classList.toggle("is-active");
    };
    later(toggle, 320);
    repeat(toggle, delay);
  }

  function autoReplay(selector, delay = 2800) {
    const target = els.canvas.querySelector(selector);
    if (!target) return;
    const replay = () => restartClass(target, "replay");
    later(replay, 220);
    repeat(replay, delay);
  }

  function autoScrollReveal() {
    const target = els.canvas.querySelector(".reveal-demo");
    if (!target) return;
    const replay = () => restartClass(target, "auto-reveal");
    later(replay, 220);
    repeat(replay, 3900);
  }

  function autoScrollSnap() {
    const scroller = els.canvas.querySelector(".snap-demo > div");
    if (!scroller) return;
    let index = 0;
    const advance = () => {
      if (paused) return;
      const items = [...scroller.children];
      index = (index + 1) % items.length;
      scroller.scrollTo({ left: items[index].offsetLeft - scroller.offsetLeft, behavior: "smooth" });
    };
    later(advance, 650);
    repeat(advance, 2100);
  }

  function addAutoplayControl(term) {
    if (term.category !== "动画") return;
    const button = document.createElement("button");
    button.className = "demo-action autoplay-control";
    button.type = "button";
    button.innerHTML = '<span aria-hidden="true">Ⅱ</span><span>暂停自动播放</span>';
    button.addEventListener("click", () => {
      paused = !paused;
      els.canvas.classList.toggle("motion-paused", paused);
      button.innerHTML = paused
        ? '<span aria-hidden="true">▶</span><span>继续自动播放</span>'
        : '<span aria-hidden="true">Ⅱ</span><span>暂停自动播放</span>';
      clearMotionTimers();
      if (!paused) startMotionPreview(term);
    });
    els.controls.prepend(button);
  }

  function startMotionPreview(term) {
    clearMotionTimers();
    if (!term || term.category !== "动画" || paused) return;

    els.canvas.classList.add("autoplaying-motion");
    const motionMap = {
      transition: () => autoToggle(".motion-sample"),
      transform: () => autoToggle(".motion-sample"),
      hover: () => autoToggle(".hover-sample"),
      easing: () => autoReplay(".easing-demo", 2450),
      "animation-delay": () => autoReplay(".delay-demo", 2300),
      "fade-in": () => autoReplay(".fade-demo", 2500),
      "slide-in": () => autoReplay(".slide-demo", 2600),
      "scale-in": () => autoReplay(".scale-demo", 2500),
      stagger: () => autoReplay(".stagger-demo", 2700),
      spring: () => autoReplay(".spring-demo", 2300),
      parallax: () => els.canvas.querySelector(".parallax-demo")?.classList.add("auto-parallax"),
      "scroll-reveal": autoScrollReveal,
      "scroll-snap": autoScrollSnap,
      "page-transition": () => autoReplay(".page-transition-demo", 3100)
    };
    motionMap[term.id]?.();
  }

  bindDemo = function bindDemoWithAutoplay(term) {
    clearMotionTimers();
    paused = false;
    activeTerm = term;
    els.canvas.classList.remove("motion-paused", "autoplaying-motion");
    previousBindDemo(term);
    addAutoplayControl(term);
    startMotionPreview(term);
  };

  window.addEventListener("pagehide", clearMotionTimers);
  renderDetail(terms.find((term) => term.id === state.activeId) || activeTerm || terms[0]);
})();
