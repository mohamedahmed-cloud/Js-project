// access
let btn = document.getElementsByClassName("btn")[0];
let span = document.querySelector("section .container .change");
let section = document.querySelector("section");
// console.log(section);

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


btn.addEventListener("click",  () =>{
    let color = "#";
    for (let i = 0; i < 6; i++)
    {
        let ind = Math.floor(Math.random() * hex.length);
        color += hex[ind];
    }
    console.log(color); 

    span.innerHTML = color;
    section.style.backgroundColor = color;
});