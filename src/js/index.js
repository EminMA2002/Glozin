
const firstsliderleftbutton = document.querySelector(".firstsliderleftbutton");
const firstsliderrightbutton = document.querySelector(".firstsliderrightbutton");
const firstsliders = document.querySelectorAll(".first")
const firstsliderchild = document.querySelector(".firstsliderchild")

const firstslidedata = [
    {
        firsttitle:"Sweater Collection",
        secondtitle:"Online Exclusive",
        buttontitle:"Shop Collection",
        image:"src/images/firstslider/slider1.png",
    },
    {
        firsttitle:"Look Exclusive",
        secondtitle:"High-Top Design",
        buttontitle:"Shop Collection",
        image:"src/images/firstslider/slider2.png",
    },
    {
        firsttitle:"Season Collection",
        secondtitle:"Super Comfort",
        buttontitle:"Shop Collection",
        image:"src/images/firstslider/slider3.png",
    },

]

let index = 0;

function loadfirstslide (index){
    firstsliderchild.innerHTML = ` <div class="first">
                <div  class="slidercontent">
                    <div class="firstslidercontenttitle">${firstslidedata[index].firsttitle}</div>
                    <div class="firstslidercontenttext">${firstslidedata[index].secondtitle}</div>
                    <button class="firstslidercontentbutton">${firstslidedata[index].buttontitle}</button>
                </div>
                <div class="siderimg">
                    <img class="sliderphoto" src=${firstslidedata[index].image} alt="">
                </div>
            </div>`
}
loadfirstslide(0);

 let sliderfirstinterval = setInterval(setIntervalfirstslider, 5000)

function setIntervalfirstslider(){
    if(index < firstslidedata.length - 1){
        index++
        loadfirstslide(index);
    }else if (index == firstslidedata.length - 1){
        index--;
        loadfirstslide(index);
    }
}

firstsliderrightbutton.addEventListener("click", () => {
    if(index < firstslidedata.length - 1){
        index++
        loadfirstslide(index);
    }else if (index == firstslidedata.length - 1){
        index = 0;
        loadfirstslide(index);
    }
    clearInterval(sliderfirstinterval)
    sliderfirstinterval = setInterval(setIntervalfirstslider, 5000)
})

firstsliderleftbutton.addEventListener("click", () => {
    if(index > 0){
        index--
        loadfirstslide(index);
    }else if(index == 0){
        index = firstslidedata.length - 1
        loadfirstslide(index); 
    }
    clearInterval(sliderfirstinterval)
    sliderfirstinterval = setInterval(setIntervalfirstslider, 5000)
})


const bestsellingleftbutton = document.querySelector(".bestsellingleftbutton");
const bestsellingrightbutton = document.querySelector(".bestsellingrightbutton");
const items = document.querySelector(".items");

let x = 330;

bestsellingrightbutton.addEventListener("click", saga);
bestsellingleftbutton.addEventListener("click", sola);

function saga (){
    items.style = `transform: translateX(-${x}px);`   
}

function sola (){
    let x = 330
    items.style = `transform: translateX(${0}px);`   
}


const seeall = document.querySelector(".seeall");
const shopbygram = document.querySelector(".shopbygram");
const seeallback = document.querySelector(".seeallback");

seeall.addEventListener("click", ()=>{
    if(seeallback.classList.contains("seeallup")){
        seeallback.classList.remove("seeallup")
        shopbygram.classList.remove("shopbytranslate")
        seeall.innerHTML = "Hide less Information"
    }else{
        seeallback.classList.add("seeallup")
        shopbygram.classList.add("shopbytranslate")
         seeall.innerHTML = "See all information"
    }

})

function setupitemphoto(){
document.addEventListener("click", (e)=>{
let childindex = e.target.dataset.targetChild

if(childindex){
    const childs = document.querySelectorAll(`[data-target-child="${childindex}"]`)
   let father = document.querySelector(`[data-target-father="${childindex}"]`)
    father.src = e.target.src
for(let i = 0; i < childs.length; ++i){
    childs[i].classList.remove("versionselected")
    e.target.classList.add("versionselected")
}
}
})
}

setupitemphoto();