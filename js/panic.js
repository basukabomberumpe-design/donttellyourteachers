var panicbutton = localStorage.getItem("panicbutton") || "]";
var panicLink = localStorage.getItem("panicLink") || "https://google.com";

document.addEventListener("keydown", function (e) {
  if (e.key === panicbutton) {
    window.location.href = panicbutton;
  }
});