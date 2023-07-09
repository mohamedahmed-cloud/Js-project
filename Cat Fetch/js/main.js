'use strict'
let api = "https://api.thecatapi.com/v1/images/search";
let myImage = document.querySelector(".section-2 img")
let btn = document.querySelector(".btn")
var data;
btn.addEventListener("click", getData);

async function fetchData() {
    try {
        const response = await fetch(api);
        data = await response.json();
        return data
    } 
    catch (error) {
        console.error(error);
    }
}
async function getData()
{
    let object = await fetchData();
    console.log(object);
    console.log(object[0].url);
    myImage.src = object[0].url;
}

