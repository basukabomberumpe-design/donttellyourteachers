document.addEventListener('DOMContentLoaded', () => {
  const i3 = document.getElementById("3");
  const i4 = document.getElementById("4");

  const l3 = localStorage.getItem("panicbutton") ?? '';
  const l4 = localStorage.getItem("paniclink") ?? '';

  if (i3) {
    i3.textContent = l3;
  }

  if (i4) {
    i4.textContent = l4;
  }
});
