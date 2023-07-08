// access
let btn = document.getElementsByClassName("btn")[0];
let span = document.querySelector("section .container .change");
let section = document.querySelector("section");
// console.log(section);

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let i = 0;
let previous = 0
btn.addEventListener("click",  () =>{
    while (i == previous)
    {
        i = Math.floor(Math.random() * colors.length);
    }
    span.innerHTML = colors[i];
    section.style.backgroundColor = colors[i];
    previous = i;
});