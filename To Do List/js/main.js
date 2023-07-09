// access on element
'use strict'
let input=document.querySelector("section.sec-1 .container input")
let add=document.querySelector("section.sec-1 .container a")
let container=document.querySelector('article .container ')

// sub Functions
let handleAll =function() {
    if (input.value){
        let inner =document.createElement("div")
        let p= document.createElement("p")
        let remove=document.createElement("span")
        let edit=document.createElement("span")
        let removeEdit=document.createElement("div")
        // Animation
        inner.classList.add("animate__animated")
        inner.classList.add("wow")
        inner.classList.add("animate__fadeInDown")
        // End Animateion

        edit.classList.add("btn")
        p.classList.add('task')
        remove.classList.add('btn')
        removeEdit.classList.add("remove-edit")
        removeEdit.appendChild(edit)
        removeEdit.appendChild(remove)
        inner.appendChild(p)
        inner.appendChild(removeEdit)
        container.prepend(inner)
        inner.classList.add('inner')
        // value
        p.innerHTML=input.value
        remove.innerHTML="Remove"
        edit.innerHTML="Edit"
        // Input
        input.value=""
        input.focus()
        // Remove
        removeMe(remove)
        // Edit
        editMe(edit,p)
    }else {
        alert("To Do Field is Empty please Enter anything")
    }
}

let editMe=function(edit,p) {
    console.log(edit);
    edit.addEventListener('click',function() {
        let newValue=prompt("Please Edit",p.innerHTML)
        if (newValue){
            p.innerHTML=newValue
        }
    })
}
let removeMe=function(remove){
    remove.addEventListener("click",function (){
            remove.parentElement.parentElement.remove()
        })
}

// function
document.addEventListener('keyup',function(e){  
    if(e.key=='Enter' ){
        handleAll()
    }
})
add.addEventListener('click',e=> {
    handleAll()

})



