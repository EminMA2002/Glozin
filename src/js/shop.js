import { loadFromLocalStorage, saveToLocalStorage } from "./utils/localStorage.js";

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

const shopcategoryhead = document.querySelectorAll(".shopcategoryhead")

for (let i = 0; i < shopcategoryhead.length; ++i) {
  shopcategoryhead[i].addEventListener("click", () => {
    const shopcategorycontent = shopcategoryhead[i].nextElementSibling;
    const shopcategoryi = shopcategoryhead[i].querySelector("button > i")

    if (shopcategorycontent.style.height) {
      shopcategorycontent.style.height = null;
      shopcategoryi.setAttribute("class", "bi bi-plus-lg")
    } else {
      shopcategorycontent.style.height = shopcategorycontent.scrollHeight + "px";
      shopcategorycontent.style["margin-top"] = "20px";
      shopcategoryi.setAttribute("class", "lni lni-minus")
    }
  })
}

const sortbuyfather = document.querySelector(".sortbuyfather");
const sortbuycategoriesinvisiblediv = document.querySelector(".sortbuycategoriesinvisiblediv")



sortbuyfather.addEventListener("click", () => {
  console.log(sortbuycategoriesinvisiblediv.style.opacity);

  if (sortbuycategoriesinvisiblediv.classList.contains("opacity1")) {
    sortbuycategoriesinvisiblediv.classList.remove("opacity1")

  } else {
    sortbuycategoriesinvisiblediv.classList.add("opacity1")

  }
})

document.addEventListener("click", () => {

  if (sortbuycategoriesinvisiblediv.style.opacity == 1) {
    sortbuycategoriesinvisiblediv.style.opacity = 0
  }
})


const filterBtn = document.querySelector(".filterbuttondiv")
const shopleftmini = document.querySelector(".shopleftmini")
const shopleftminichild = document.querySelector(".shopleftminichild")
const filterx = document.querySelector(".filterx")

filterBtn.addEventListener("click", () => {
  shopleftmini.classList.remove("displaynone");
  shopleftminichild.style.opacity = "1";
})

shopleftmini.addEventListener("click", () => {
  shopleftmini.classList.add("displaynone");
})

filterx.addEventListener("click", () => {
  shopleftmini.classList.add("displaynone");
})

shopleftminichild.addEventListener("click", (e) => {
  e.stopPropagation();
})

window.addEventListener("resize", () => {
  shopleftmini.classList.add("displaynone");
  shopleftminichild.style.opacity = "0";
})

// ________________________________________________________

const resultsamount = document.querySelector(".resultsamount")

const shopitems = document.querySelector(".shopitems")


let wishDatasInShop = loadFromLocalStorage("wishIds") || [];


const API_URL = "../../db/products.json"

async function getProducts(firstCount = 0, secondCount = 9) {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const paginationNumber = Math.ceil(data.products.length / 9)
    importPagination(paginationNumber)
    data.products = data.products.slice(firstCount, secondCount);


    function resultNumber() {
      resultsamount.innerHTML = `There are ${data.products.length} results in total`
    }

    resultNumber();
    shopitems.innerHTML = "";
    for (let i = 0; i < data.products.length; ++i) {
      if (data.products[i].category == category || !category) {
        shopitems.innerHTML += `
        <div id=${data.products[i].id} class="shopitem">
                                              <div id=${data.products[i].id} class="shopitemphoto">
                                                  <img class="shopitemimghover" src="${data.products[i].colors[0].photos[1]}" alt="">
                                                  <img data-target-father="${i}" class="shopitemimg" src="${data.products[i].colors[0].photos[0]}" alt="">
                                                  <div class="shoprighthoverdiv">
                                                      <div class="shoprightheart">
                                                          <div class="shoprightheartlabel">
                                                              <div class="shoprightheartlabelfirstrectangle">Add to wishlist</div>
                                                              <div class="shoprightheartlabelsecondrectangle"></div>
                                                          </div>
                                                          <button id=${data.products[i].id} class="shoprightheartbutton"><i class = "lni lni-heart"></i></button>
                                                      </div>
                                                      <div class="shoprightlayers">
                                                          <div class="shoprightlayerslabel">
                                                              <div class="shoprightlayerslabelfirstrectangle">Compare</div>
                                                              <div class="shoprightlayerslabelsecondrectangle"></div>
                                                          </div>
                                                          <button class="shoprightlayersbutton"><i class = "lni lni-layers"></i></button>
                                                      </div>
                                                      <div class="shoprighteye">
                                                          <div class="shoprighteyelabel">
                                                              <div class="shoprighteyelabelfirstrectangle">Quick view</div>
                                                              <div class="shoprighteyelabelsecondrectangle"></div>
                                                          </div>
                                                          
                                                          <button class="shoprighteyebutton"><i class = "lni lni-eye"></i></button>
                                                      </div>
                                                  </div>
                                                  <button class="shopbottomhoverdiv">Select Options</button>
                                                  </div>
                                              <div class="shopitemtitle">${data.products[i].title}</div>
                                              <div class="shopitemstars">
                                                  <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                                  <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                                  <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                                  <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                                  <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                              </div>
                                              <div class="shopitemcost">$${data.products[i].price}</div>
                                              <div class="shopitemversions">
                                                  <div class="shopversion">
                                                      <img data-target-child="${i}" class="shopversionimg" src="${data.products[i].colors[0].photos[0]}" alt="">
                                                  </div>
                                                  <div class="shopversion">
                                                      <img data-target-child="${i}" class="shopversionimg" src="${data.products[i].colors[1].photos[0]}" alt="">
                                                  </div>
                                              </div>
                                          </div>`
      }
    }

    const shopitemphoto = document.querySelectorAll(".shopitemphoto")

    for (let i = 0; i < shopitemphoto.length; ++i) {
      shopitemphoto[i].addEventListener("click", (e) => {
        const productId = e.currentTarget.getAttribute("id");

        window.location.href = `../../products.html?id=${productId}`;
      })
    }

    const shoprightheartbutton = document.querySelectorAll(".shoprightheartbutton");

    for (let i = 0; i < shoprightheartbutton.length; ++i) {
      shoprightheartbutton[i].addEventListener("click", (e) => {
        e.stopPropagation();
        const wishedProductId = e.currentTarget.getAttribute("id");
        if (!wishDatasInShop.includes(wishedProductId)) {
          wishDatasInShop.push(wishedProductId);
        }
        saveToLocalStorage("wishIds", wishDatasInShop);
        console.log(wishDatasInShop);
      });
    }


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

setupitemphoto();

const pageamounts = document.querySelector(".pageamounts")

function importPagination(par) {
  pageamounts.innerHTML= ""
  for (let i = 1; i <= par; i++) {
    
    pageamounts.innerHTML += `
                            <div  class="pageamount"><button data-value="${i}" class="pageamountbutton">${i}</button></div>
                            `
  }
  pageamounts.innerHTML += `
                        <div class="pageamount"><button class="pageamountbutton"><i class = "lni lni-chevron-right"></i></button></div>
  `
}

let index = 1;
document.addEventListener("click", async (e) => {
  const value = e.target.dataset.value;
  if (value) {
    let firstCount = value > 0 ? (value - 1) * 9 : 0;
    let secondCount = (value) * 9;
    index = value;
    await getProducts(firstCount, secondCount)
  }
})






