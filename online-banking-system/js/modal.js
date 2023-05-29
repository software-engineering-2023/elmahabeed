"use strict";

const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal.modal1");
const modal2 = document.querySelector(".modal2");
const modal3 = document.querySelector(".modal3");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnOpenModal = document.querySelector(".btn--show-modal");
const btnsOpenModal = document.querySelector(".btn--show-modals");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const openSpecificModal = function (e) {
  e.preventDefault();
  if (e.classList.contains("modal1")) {
    modal1.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (e.classList.contains("modal2")) {
    modal2.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (e.classList.contains("modal3")) {
    modal3.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openSpecificModal);
btnOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
