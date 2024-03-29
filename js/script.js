var link = document.querySelector(".search-hotels-button");
var popup = document.querySelector(".modal-booking");
var open = document.querySelector(".modal-hide");
var checkIn = popup.querySelector(".check-in-value");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (document.querySelector(".modal-hide")) {
    popup.classList.remove("modal-hide");
    checkIn.focus();
  } else {
    popup.classList.add("modal-hide");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup) {
      popup.classList.add("modal-hide");
    }
  }
});
