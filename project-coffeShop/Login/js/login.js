"use strict"

//login form

const wellcomeForm = document.querySelector("form");
const userInp = document.querySelector("#user");
const passInp = document.querySelector("#pass");

wellcomeForm.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "mor_2314",
                password: "83r5^_",
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            wellcomeForm.innerHTML = '<h2> login successfully :)</h2>'
        })
        .catch((err) => alert(err));
});

//back btn
const backpageEL = document.querySelector("#backpage");
backpageEL.addEventListener("click", () => {
    history.back();

})