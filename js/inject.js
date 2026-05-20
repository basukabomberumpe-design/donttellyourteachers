// Run after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const i3 = document.getElementById("3");
  const i4 = document.getElementById("4");

  const l3 = localStorage.getItem("panicbutton");
  const l4 = localStorage.getItem("paniclink");

  console.log('panicbutton:', l3, 'paniclink:', l4);
  console.log('elements exist?', !!i3, !!i4);

  if (i3) i3.textContent = l3 ?? '';
  if (i4) i4.textContent = l4 ?? '';
});
