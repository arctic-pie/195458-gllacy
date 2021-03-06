var open = document.querySelector(".btn-feedback");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close");
var overlay = document.querySelector(".overlay");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-open");
  overlay.classList.add("overlay-open");
    if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-open");
  overlay.classList.remove("overlay-open");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("feedback-open")) {
      popup.classList.remove("feedback-open");
      popup.classList.remove("modal-error");
    }
  }
  });