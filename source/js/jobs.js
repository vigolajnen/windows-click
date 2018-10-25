// модальное окно
var modalOpenJobs = document.querySelector(".jobs__button");
var modalJobs = document.querySelector(".modal-form--jobs");
var modalBtn = document.querySelector(".modal-form__close");
var modalBtnJobs = document.querySelector(".modal-form__close--jobs");

modalOpenJobs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalJobs.classList.add("modal-form-show");
});

modalBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBtnJobs.classList.remove("modal-form-show");
});
