// access
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

let currValue = document.querySelector(".change");

console.log(increase);
console.log(reset);
console.log(decrease);
console.log(currValue);
decrease.addEventListener("click", () => {
    currValue.innerHTML = parseInt(currValue.innerHTML) - 1
})
reset.addEventListener("click", () => {
    currValue.innerHTML = 0;
})
increase.addEventListener("click", () => {
    currValue.innerHTML = parseInt(currValue.innerHTML) + 1
})
