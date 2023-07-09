// access
"use strict";

let screen = document.querySelectorAll(".screen");
let increment = document.querySelectorAll(".after");
let reset = document.querySelectorAll(".before");
screen.value = "4";
let x = 0;
console.log(increment);
increment.forEach((elements) => {
    // console.log(elements.parentElement);
    elements.addEventListener("click", (ele) => {
        ele.srcElement.parentElement.children[0].innerHTML= Number(ele.srcElement.parentElement.children[0].innerHTML)+1;
    });
});
reset.forEach((elements) => {
    // console.log(elements.parentElement);
    elements.addEventListener("click", (ele) => {
        ele.srcElement.parentElement.children[0].innerHTML= 0;
    });
});
