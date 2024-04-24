"use strict"

// start slider auto
const imgEl = document.querySelectorAll("#banner div img")
let slider = 0
let time = setInterval(() => {
        imgEl[slider].classList.remove("show");
        slider++;
        if (slider === imgEl.length) {
            slider = 0
        }
        imgEl[slider].classList.add("show");
    }, 2500)
    // end slider auto

// start slider
const sliderItems = document.querySelectorAll('#sliders div')
const removeActiveClass = () => {
    for (let i = 0; i < sliderItems.length; i++) {
        sliderItems[i].classList.remove('active')
    }
}
for (let i = 0; i < sliderItems.length; i++) {
    sliderItems[i].addEventListener('click', () => {
        removeActiveClass()
        sliderItems[i].classList.add('active')
    })
}
// end slider
//btn back page and forward page
const backBtn = document.querySelector("#backpage");
backBtn.addEventListener("click", () => {
    history.back();

});