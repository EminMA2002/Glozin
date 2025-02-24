import { loadFromLocalStorage, saveToLocalStorage } from "../js/utils/localStorage.js"
import { removeFromWishlist } from "./features/wishlistController.js";

const wishlistitemschild = document.querySelector(".wishlistitemschild");

let wishDatas = loadFromLocalStorage("wishIds");

const API_URL = "../../db/products.json"

async function getProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    console.log(data);
    wishlistitemschild.innerHTML = ""

    for (let i = 0; i < data.products.length; ++i) {
      if (wishDatas.includes(data.products[i].id)) {
        wishlistitemschild.innerHTML += `
                           <div class="item">
                        <div id=${data.products[i].id}  class="itemphoto width100">
                            <img class="itemimghover" src="${data.products[i].colors[0].photos[1]}" alt="">
                            <img data-target-father="${i}" class="itemimg" src="${data.products[i].colors[0].photos[0]}" alt="">
                            <div class="righthoverdiv">
                                <div class="rightheart">
                                    <div class="rightheartlabel">
                                        <div class="rightheartlabelfirstrectangle">Remove</div>
                                        <div class="rightheartlabelsecondrectangle"></div>
                                    </div>
                                    <button id=${data.products[i].id} class="rightxbutton"><i class = "bi bi-x-lg"></i></button>
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
                        <div class="itemtitle">${data.products[i].title}</div>
                        <div class="itemstars">
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                            <a class="startext" href=""><i class = "bx bxs-star"></i></a>
                        </div>
                        <div class="itemcost">$${data.products[i].price}</div>
                        <div class="itemversions">
                            <div class="version">
                                <img data-target-child="${i}" class="versionimg" src="${data.products[i].colors[0].photos[0]}" alt="">
                            </div>
                            <div class="version">
                                <img data-target-child="${i}" class="versionimg" src="${data.products[i].colors[1].photos[0]}" alt="">
                            </div>
                        </div>
                    </div>
        `
      }


      const itemphoto = document.querySelectorAll(".itemphoto")

      for (let i = 0; i < itemphoto.length; ++i) {
        itemphoto[i].addEventListener("click", (e) => {
          const productId = e.currentTarget.getAttribute("id");

          window.location.href = `../../products.html?id=${productId}`;
        })
      }

      const shoprightheartbutton = document.querySelectorAll(".shoprightheartbutton");

      for (let i = 0; i < shoprightheartbutton.length; ++i) {
        shoprightheartbutton[i].addEventListener("click", (e) => {
          e.stopPropagation();
          const wishedProductId = e.currentTarget.getAttribute("id");
          if (!wishProductsIds.includes(wishedProductId)) {
            wishProductsIds.push(wishedProductId);
          }
          saveToLocalStorage("wishIds", wishProductsIds);
          console.log(wishProductsIds);
        });
      }



      setupitemphoto();
      
    }
    deleteWish();
  } catch (error) {
    console.log(error);

  }
}

getProducts();


function setupitemphoto() {
  document.addEventListener("click", (e) => {
    let childindex = e.target.dataset.targetChild

    if (childindex) {
      const childs = document.querySelectorAll(`[data-target-child="${childindex}"]`)
      let father = document.querySelector(`[data-target-father="${childindex}"]`)
      father.src = e.target.src
      for (let i = 0; i < childs.length; ++i) {
        childs[i].classList.remove("versionselected")
        e.target.classList.add("versionselected")
      }
    }
  })
}

function deleteWish() {

  const rightxbutton = document.querySelectorAll(".rightxbutton")

  for (let i = 0; i < rightxbutton.length; ++i) {
    rightxbutton[i].addEventListener("click", (e) => {
      e.stopPropagation();
      let productIdDelete = e.currentTarget.getAttribute("id");
      wishDatas = removeFromWishlist(productIdDelete);
      getProducts();
    }
    )
  }
}