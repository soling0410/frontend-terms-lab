(function fixNestedComponentStates() {
  const previousBindDemo = bindDemo;

  bindDemo = function bindCorrectedComponentStates(term) {
    previousBindDemo(term);
    if (!term.demo.startsWith("ui-")) return;

    const specimen = els.canvas.querySelector(".ui-specimen");
    specimen?.querySelectorAll("[data-ui-action]").forEach((control) => {
      control.addEventListener("click", () => {
        const action = control.dataset.uiAction;
        if (action === "switch") {
          const root = control.closest(".switch-demo");
          root.classList.toggle("open", specimen.classList.contains("open"));
          root.querySelector("strong span").textContent = root.classList.contains("open") ? "开启" : "关闭";
        }
        if (action === "popconfirm" || action === "popover") {
          const root = control.closest(".pop-demo");
          root?.classList.toggle("open", specimen.classList.contains("open"));
        }
        if (action === "tree") {
          const root = control.closest(".tree-demo");
          root?.classList.toggle("open", specimen.classList.contains("open"));
        }
      });
    });
  };

  renderDetail(terms.find((term) => term.id === state.activeId) || terms[0]);
})();
