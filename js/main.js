const bookingLink = document.querySelector(".hotel-search-button");
const bookingPopup = document.querySelector(".modal-booking");

bookingLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingPopup.classList.toggle("modal-invis");
});
