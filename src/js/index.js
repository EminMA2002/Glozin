import {getProductByCount} from "./utils/productController.js"
import {loadFromLocalStorage, saveToLocalStorage} from "./utils/localStorage.js"
import { checkProductInWishlish, removeFromWishlist, saveToWishlist } from "./features/wishlistController.js";

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




// alskdasdlkasldsalkjd


const itemsElement = document.querySelector(".items")
const wishDatasInIndex = loadFromLocalStorage("wishIds") || []

async function getBestSellingItems(){
    const data = await getProductByCount(7);
    console.log(data);

    for(let i =0; i < data.length; ++i){
        itemsElement.innerHTML +=`
                           <div class="item">
                        <div id=${data[i].id}  class="itemphoto">
                            <img class="itemimghover" src="${data[i].colors[0].photos[1]}" alt="">
                            <img data-target-father="${i}" class="itemimg" src="${data[i].colors[0].photos[0]}" alt="">
                            <div class="righthoverdiv">
                                <div class="rightheart">
                                    <div class="rightheartlabel">
                                        <div class="rightheartlabelfirstrectangle">Add to wishlist</div>
                                        <div class="rightheartlabelsecondrectangle"></div>
                                    </div>
                                    <button data-target-bestSelling=${data[i].id} id=${data[i].id} class="rightheartbutton  ${checkProductInWishlish(data[i].id) ? "rightheartbuttonBlack" : ""}"><i class = "lni lni-heart"></i></button>
                                </div>
                                <div class="rightlayers">
                                    <div class="rightlayerslabel">
                                        <div class="rightlayerslabelfirstrectangle">Compare</div>
                                        <div class="rightlayerslabelsecondrectangle"></div>
                                    </div>
                                    <button class="rightlayersbutton"><i class = "lni lni-layers"></i></button>
                                </div>
                                <div class="righteye">
                                    <div class="righteyelabel">
                                        <div class="righteyelabelfirstrectangle">Quick view</div>
                                        <div class="righteyelabelsecondrectangle"></div>
                                    </div>
                                    
                                    <button class="righteyebutton"><i class = "lni lni-eye"></i></button>
                                </div>
                            </div>
                            <button class="bottomhoverdiv">Select Options</button>
                            </div>
                        <div class="itemtitle">${data[i].title}</div>
                        <div class="itemstars">
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                        </div>
                        <div class="itemcost">$${data[i].price}</div>
                        <div class="itemversions">
                            <div class="version">
                                <img data-target-child="${i}" class="versionimg" src="${data[i].colors[0].photos[0]}" alt="">
                            </div>
                            <div class="version">
                                <img data-target-child="${i}" class="versionimg" src="${data[i].colors[1].photos[0]}" alt="">
                            </div>
                        </div>
                    </div>
        `


    }
    const itemphoto = document.querySelectorAll(".itemphoto")

    for(let i=0; i<itemphoto.length; ++i){
      itemphoto[i].addEventListener("click",(e)=>{
        const productId = e.currentTarget.getAttribute("id");

        window.location.href = `../../products.html?id=${productId}`;       
      })
  }


  const rightheartbutton = document.querySelectorAll(".rightheartbutton");

  for (let i = 0; i < rightheartbutton.length; ++i) {
    rightheartbutton[i].addEventListener("click", (e) => {
      e.stopPropagation(); 
      const ProductId = e.currentTarget.getAttribute("id");
      if(checkProductInWishlish(ProductId)){
        removeFromWishlist(ProductId);
        console.log("salam");
        const trendingButton=document.querySelector(`[data-target-trending=${ProductId}]`)
    if(trendingButton){
        trendingButton.classList.remove("rightheartbuttonBlack")
    }        
        rightheartbutton[i].classList.remove("rightheartbuttonBlack")
    }else{
        console.log("sagol");
        const trendingButton=document.querySelector(`[data-target-trending=${ProductId}]`)
        if(trendingButton){
            trendingButton.classList.add("rightheartbuttonBlack")
        }        
            rightheartbutton[i].classList.add("rightheartbuttonBlack")
        saveToWishlist(ProductId);
        rightheartbutton[i].classList.add("rightheartbuttonBlack")
    }
    });
  }
}



    getBestSellingItems();


    const trendingitems = document.querySelector(".trendingitems")


    async function getTrendingItems(){
        const trendData = await getProductByCount(9);
        console.log(trendData);
    
        for(let i =0; i < trendData.length; ++i){
            trendingitems.innerHTML +=`
                               <div class="item">
                            <div id=${trendData[i].id}  class="itemphoto">
                                <img class="itemimghover" src="${trendData[i].colors[0].photos[1]}" alt="">
                                <img data-target-father="${i}t" class="itemimg" src="${trendData[i].colors[0].photos[0]}" alt="">
                            <div class="righthoverdiv">
                                <div class="rightheart">
                                    <div class="rightheartlabel">
                                        <div class="rightheartlabelfirstrectangle">Add to wishlist</div>
                                        <div class="rightheartlabelsecondrectangle"></div>
                                    </div>
                                    <button data-target-trending=${trendData[i].id} id=${trendData[i].id} class="rightheartbutton  ${checkProductInWishlish(trendData[i].id) ? "rightheartbuttonBlack" : ""}"><i class = "lni lni-heart"></i></button>
                                </div>
                                <div class="rightlayers">
                                    <div class="rightlayerslabel">
                                        <div class="rightlayerslabelfirstrectangle">Compare</div>
                                        <div class="rightlayerslabelsecondrectangle"></div>
                                    </div>
                                    <button class="rightlayersbutton"><i class = "lni lni-layers"></i></button>
                                </div>
                                <div class="righteye">
                                    <div class="righteyelabel">
                                        <div class="righteyelabelfirstrectangle">Quick view</div>
                                        <div class="righteyelabelsecondrectangle"></div>
                                    </div>
                                    
                                    <button class="righteyebutton"><i class = "lni lni-eye"></i></button>
                                </div>
                            </div>
                                <button class="bottomhoverdiv">Select Options</button>
                                </div>
                            <div class="itemtitle">${trendData[i].title}</div>
                            <div class="itemstars">
                                <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                                <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                                <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                                <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                                <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            </div>
                            <div class="itemcost">$${trendData[i].price}</div>
                            <div class="itemversions">
                                <div class="version">
                                    <img data-target-child="${i}t" class="versionimg" src="${trendData[i].colors[0].photos[0]}" alt="">
                                </div>
                                <div class="version">
                                    <img data-target-child="${i}t" class="versionimg" src="${trendData[i].colors[1].photos[0]}" alt="">
                                </div>
                            </div>
                        </div>
            `


        }



        const itemphoto = document.querySelectorAll(".itemphoto")

        for(let i=0; i<itemphoto.length; ++i){
          itemphoto[i].addEventListener("click",(e)=>{
            const productId = e.currentTarget.getAttribute("id");
            window.location.href = `../../products.html?id=${productId}`;       
          })
      }



        const rightheartbutton = document.querySelectorAll(".trendingfather .rightheartbutton");

  for (let i = 0; i < rightheartbutton.length; ++i) {
    rightheartbutton[i].addEventListener("click", (e) => {
      e.stopPropagation(); 
      const ProductId = e.currentTarget.getAttribute("id");
      if(checkProductInWishlish(ProductId)){
        removeFromWishlist(ProductId);
        console.log("salam");
        rightheartbutton[i].classList.remove("rightheartbuttonBlack")
        const sellingButton=document.querySelector(`[data-target-bestSelling=${ProductId}]`)
        if(sellingButton){
            sellingButton.classList.remove("rightheartbuttonBlack")
        }        
            rightheartbutton[i].classList.remove("rightheartbuttonBlack")
    }else{
        console.log("sagol");
        saveToWishlist(ProductId);
        const sellingButton=document.querySelector(`[data-target-bestSelling=${ProductId}]`)
        if(sellingButton){
            sellingButton.classList.add("rightheartbuttonBlack")
        }    
        rightheartbutton[i].classList.add("rightheartbuttonBlack")
    }
    });
  }
    }
    getTrendingItems();



       
const collectionTSH = document.getElementById("collectionTSH")
const collectionCrop = document.getElementById("collectionCrop")
const collectionCoats = document.getElementById("collectionCoats")
const collectionBlazer = document.getElementById("collectionBlazer")
const collectionSweaters = document.getElementById("collectionSweaters")
const collectionHoodie = document.getElementById("collectionHoodie")

collectionTSH.addEventListener("click",()=>{
    console.log("salam");
    
    window.location.href="../../shop.html?category=T-Shirt"
})
collectionCrop.addEventListener("click",()=>{
    console.log("salam");

    window.location.href="../../shop.html?category=Crop-top"

})
collectionCoats.addEventListener("click",()=>{
    console.log("salam");

    window.location.href="../../shop.html?category=Coats"

})
collectionBlazer.addEventListener("click",()=>{
    console.log("salam");

    window.location.href="../../shop.html?category=Blazer"

})
collectionSweaters.addEventListener("click",()=>{
    console.log("salam");

    window.location.href="../../shop.html?category=Sweater"

})
collectionHoodie.addEventListener("click",()=>{
    console.log("salam");

    window.location.href="../../shop.html?category=Hoodie"

})
