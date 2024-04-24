"use strict"
// btn back
const logoBack = document.querySelector(".logo")
logoBack.addEventListener("click", () => {
        history.back()

    })
    // btn back
    // start modal

// end modal
//start opening hours
const daysEl = document.querySelector('#days');
const timeEl = document.querySelector('#open-close');
const resultEl = document.querySelector('#result');
const openingHourse = {
    monday: {
        open: 8,
        close: 21,
    },
    thursday: {
        open: 11,
        close: 22,
    },
    wednesday: {
        open: 8,
        close: 20,
    },
    tuesday: {
        open: 9,
        close: 23,
    },
    friday: {
        open: 9,
        close: 19,
    },
    saturday: {
        open: 7,
        close: 23,
    },
    sunday: {
        open: 6,
        close: 24,
    },
};
resultEl.addEventListener("click", () => {
    const day = daysEl.value;
    const hours = timeEl.value;
    const keyday = openingHourse[day];
    const o = keyday.open;
    const c = keyday.close;
    const array = ["saturday", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday"];
    if (array.includes(day) == true) {
        if (hours == "open") {
            alert(`Coffee shop opening hours at ${o}  A.M`);
        } else if (hours == "close") {
            alert(`End of coffee shop working hoursat ${c}  P.M`);
        }
    } else {
        alert(`Eror404 !`);
    }
    dayInp.value = "";
    hoursInp.value = "";
});
// end opening hours
const InputEl = document.querySelectorAll('#input')
const BtnEl = document.querySelector('#btn-submit')
let Title = document.querySelector('#Document')

BtnEl.addEventListener('click', () => {
    Title.textContent = input.value;
    input.value = "";
})