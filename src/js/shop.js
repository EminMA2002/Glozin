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

  if (sortbuycategoriesinvisiblediv.style.opacity == 1) {
    sortbuycategoriesinvisiblediv.style.opacity = 0

  } else {
    sortbuycategoriesinvisiblediv.style.opacity = 1

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

const API_URL = "http://192.168.176.11:3000/api/user/product"

async function fetchProducts() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const shopitems = document.querySelector(".shopitems")

for (let i = 0; i < data.length; ++i) {
  shopitems.innerHTML += `
  <div class="shopitem">
                                        <div  class="shopitemphoto">
                                            <img class="shopitemimghover" src="src/images/bestselling/item11.png" alt="">
                                            <img data-target-father="1" class="shopitemimg" src="http://192.168.176.11:3000${data[i].colors[0].img}" alt="">
                                            <div class="shoprighthoverdiv">
                                                <div class="shoprightheart">
                                                    <div class="shoprightheartlabel">
                                                        <div class="shoprightheartlabelfirstrectangle">Add to wishlist</div>
                                                        <div class="shoprightheartlabelsecondrectangle"></div>
                                                    </div>
                                                    <button class="shoprightheartbutton"><i class = "lni lni-heart"></i></button>
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
                                        <div class="shopitemtitle">${data[i].title}</div>
                                        <div class="shopitemstars">
                                            <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                            <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                            <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                            <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                            <a class="shopstartext" href=""><i class = "bx bxs-star"></i></a>
                                        </div>
                                        <div class="shopitemcost">$${data[i].price}</div>
                                        <div class="shopitemversions">
                                            <div class="shopversion">
                                                <img data-target-child="1" class="shopversionimg" src="http://192.168.176.11:3000${data[i].colors[0].img}" alt="">
                                            </div>
                                            <div class="version">
                                                <img data-target-child="1" class="shopversionimg" src="src/images/bestselling/item1low1.png" alt="">
                                            </div>
                                        </div>
                                    </div>`
}

  } catch (error) {
    console.log(error);

  }
}

fetchProducts();

