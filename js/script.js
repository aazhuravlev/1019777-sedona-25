var link = document.querySelector(".search-hotels-button");
var popup = document.querySelector(".modal-booking");
var close = popup.querySelector(".modal-show");
var checkIn = popup.querySelector(".check-in-value");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (document.querySelector(".modal-show")) {
    popup.classList.remove("modal-show");
  } else {
    popup.classList.add("modal-show");
    checkIn.focus();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
