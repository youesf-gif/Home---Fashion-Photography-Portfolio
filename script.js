"use strict";

const btnNav = document.querySelector("button");

let flag = false;

btnNav.addEventListener("click", function () {
    if (!flag) {
        document.querySelector(".nav").style.display = "block";
        flag = true;
    } else {
        document.querySelector(".nav").style.display = "none";
        flag = false;
    }
});
