// get all element needed
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const pagination = document.querySelector(".pagination")
const allImage = document.querySelectorAll(".slider-content img")
const sliderNumber = document.querySelector(".number")
// console.log(next,prev,pagination, allImage);


// prepare data
const allImageArray = Array.from(allImage)
const imageNumber = allImageArray.length;

let UL = document.createElement("ul")
for (let i = 0 ; i < imageNumber; i++) {
    let currentLi = document.createElement("li")
    currentLi.setAttribute("data-set", i + 1)
    currentLi.innerText = `${i + 1}`
    UL.appendChild(currentLi)
}
pagination.appendChild(UL);

// change the slider when click on any pagination number
const allLi = document.querySelectorAll("li");
const ULArray = Array.from(allLi);

// set a default active slider
allImageArray[0].classList.add("active")
ULArray[0].classList.add('activebutton')
prev.classList.add("disable")

// function to next & prev & slider
// slider Number function.
const RemoveActiveClass = () => {
    allImageArray.forEach(ele => {
        ele.classList.remove("active")
     })
}
const RemoveActiveButtonClass = () => {
    ULArray.forEach(ele => {
        ele.classList.remove('activebutton')
     })
}
const getCurrPosition = () => {
    var prevPosition = 0
    ULArray.forEach(ele => {
        if (ele.classList.value == "activebutton") {
            prevPosition = parseInt(ele.innerHTML)
        }
    })
    return prevPosition
}

const disablePrev = () => {
    if (getCurrPosition() -2 < 0)
    {
        prev.classList.add("disable")
    }
    else {
        prev.classList.remove("disable")
    }
}

const disableNext = () => {
    if (getCurrPosition()  >= imageNumber)
    {
        next.classList.add("disable")
    }
    else {
        next.classList.remove("disable")
    }

}
const sliderNumberFunction = (e) => {
    sliderNumber.innerText = `slider ${e.innerHTML}/4`
        RemoveActiveClass()
        RemoveActiveButtonClass()
        allImageArray[e.innerHTML - 1].classList.add('active')
        ULArray[e.innerHTML -1].classList.add('activebutton')
        disablePrev()
        disableNext()
}


// prev function.

const prevFunction = () => {  
    let currPosition = getCurrPosition() - 2
    if (currPosition >= 0) {
        sliderNumber.innerText = `slider ${currPosition + 1}/4`
        RemoveActiveClass()
        RemoveActiveButtonClass()
        allImageArray[currPosition].classList.add('active')
        ULArray[currPosition].classList.add("activebutton")
        disablePrev()
        disableNext()
    }
}

// next Function
let nextFucntion = () => {
    let currPosition = getCurrPosition() 
    console.log(currPosition);
    if (currPosition < imageNumber)
    {
        sliderNumber.innerText = `slider ${currPosition + 1}/4`
        RemoveActiveClass()
        RemoveActiveButtonClass()
        allImageArray[currPosition].classList.add('active')
        ULArray[currPosition].classList.add("activebutton")
        disablePrev()
        disableNext()

    }
}





ULArray.forEach(e => {
    e.addEventListener('click', () => sliderNumberFunction(e))
});

next.addEventListener("click", nextFucntion)
prev.addEventListener("click", prevFunction)
