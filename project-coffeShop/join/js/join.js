"use strict"
const modalEl = document.querySelector(".modal");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");
const btnEl = document.querySelector(".btn");

const openModal = function() {
    modalEl.classList.remove("hidden");
};
openModalBtn.addEventListener("click", openModal);
const closeModal = function() {
    modalEl.classList.add("hidden");
};
closeModalBtn.addEventListener("click", closeModal);
const button = function() {
    alert("Glad to meet you My friend!!");
};
btnEl.addEventListener("click", button);