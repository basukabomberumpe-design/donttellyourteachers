(function() {
  const b = localStorage.getItem("panicbutton");
  const l = localStorage.getItem("paniclink");

  window.addEventListener("keydown", e => {
    if (e.key === b) window.location.href = l;
  });
})();
