let arr =
[
    {
        image :"images/person-1.jpg",
        name :"Susan Smith",
        job :"WEB DEVELOPER",
        content :"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before\
        they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie,\
        cold-pressed four dollar toast everyday carry"
    },
    {
        image :"images/person-2.jpg",
        name :"Peter Jones",
        job :"INTERN",
        content :"Sriracha literally flexitarian irony, vape marfa unicorn.\
        Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal\
        slow-carb marfa hell of pabst raclette post-ironic jianbing swag."
    },
    {
        image :"images/person-3.jpg",
        name :"Bill Anderson",
        job :"THE BOSS",
        content :"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before\
        they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie,\
        cold-pressed four dollar toast everyday carry"
    },
    {
        image :"images/person-4.jpg",
        name :"Susan Smith",
        job :"WEB DEVELOPER",
        content :"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom\
        fashion axe cray stumptown venmo actually seitan. VHS farm-to-table\
        schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
    }
]
// access
let img = document.querySelector(".image img")
// console.log(img);
let name = document.querySelector(".name .direct-name")
// console.log(name);
let job = document.querySelector(".name .job");
// console.log(job);
let content = document.querySelector(".content p");
// console.log(content);

let btn_left = document.querySelector(".icons .left");
// console.log(btn_left);

let btn_right = document.querySelector(".icons .right");
// console.log(btn_right);
let btn_surprise = document.querySelector(".button .surprise")
// console.log(surprise);


// logic 
let last = 0;
let object;
let i = 0;
function surprise()
{
    i = Math.floor(Math.random() * arr.length);
    while (last == i)
    {
        i = Math.floor(Math.random() * arr.length);
    }
    object = arr[i];
    last = i
    console.log(object);
    return (object);
}
function left()
{
    i -= 1;
    if (i < 0)
    i = 3;
    object = arr[i]
    return (object);
}
function right()
{
    i = (i + 1) % 4;
    return (arr[i]);
}
btn_left.addEventListener("click", () =>
{
    let currObject = left();
    // console.log(currObject);
    // console.log(image)
    // console.log(currObject.image);
    img.src = currObject.image;
    name.innerHTML = currObject.name;
    job.innerHTML = currObject.job;
    content.innerHTML = currObject.content;
});
btn_right.addEventListener("click", () => {
    let currObject = right();
    img.src = currObject.image;
    name.innerHTML = currObject.name;
    job.innerHTML = currObject.job;
    content.innerHTML = currObject.content;
})

btn_surprise.addEventListener("click", () =>
{
    let currObject = surprise();
    img.src = currObject.image;
    name.innerHTML = currObject.name;
    job.innerHTML = currObject.job;
    content.innerHTML = currObject.content;
})