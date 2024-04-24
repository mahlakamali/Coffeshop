"use strict"
// start menu fix
const bannerEl = document.querySelector("#banner-contact img");
const navEl = document.querySelector(".menu");

window.addEventListener("scroll", () => {
    const top = bannerEl.getBoundingClientRect().top;
    top <= 1 ? navEl.classList.add("show") : navEl.classList.remove("show");
});
// end menu fix
// start btn
const backpageEl = document.querySelector("#backpage")
backpageEl.addEventListener("click", () => {
        history.back()

    })
    // end btn
    // start menu hambergeri
const menuItemEl = document.querySelector('#menu-item');
const openEl = document.querySelector('#open');
const closeEl = document.querySelector('#close');

openEl.addEventListener('click', () => {
    menuItemEl.classList.add('show-menu-item')
})
closeEl.addEventListener('click', () => {
    menuItemEl.classList.remove('show-menu-item')
});
// end menu hambergeri
const submitEl = document.querySelector("#submitform");
submitEl.addEventListener("click", () => {
    alert("Thank you! your comment has been sent");

});