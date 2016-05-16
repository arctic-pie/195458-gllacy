var open = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close");
var overlay = document.querySelector(".overlay");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-open");
  overlay.classList.add("overlay-open");
});
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-open");
  overlay.classList.remove("overlay-open");
});
