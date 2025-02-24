import { addToCart } from "./features/cart.js";
import { checkProductInWishlish, removeFromWishlist, saveToWishlist } from "./features/wishlistController.js";
import { getAllProducts } from "./utils/productController.js";

const selectedSpec = {
    count: 1,
    size: "m",
    color: "reds"
}

let toCNNumber = null;
const productOpen = document.querySelectorAll(".productOpen");

for (let i = 0; i < productOpen.length; ++i) {
    productOpen[i].addEventListener("click", () => {
        const productOpeni = productOpen[i].querySelector("button > i");
        if (productOpen[i].style.height) {
            productOpen[i].style.height = null;
            productOpeni.setAttribute("class", "bi bi-plus-lg")
        } else {
            productOpen[i].style.height = productOpen[i].scrollHeight + "px";
            productOpeni.setAttribute("class", "lni lni-minus")
        }
    });
}

const productfather = document.querySelector(".productfather");


const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let product = null;

const API_URL_PROD = "../../db/products.json"

async function getProducts() {
    try {
        const products = await getAllProducts();


        for (let i = 0; i < products.length; ++i) {
            if (products[i].id == productId) {
                product = products[i]
                break;
            }
        }

        if (product) {
            productfather.innerHTML = `
    
        <div class="productchild">
      <div class="productleft">
          <div class="mainphoto">
              <img class="mainimg" src="${product.colors[0].photos[0]}" alt="">
          </div>
          <div class="secondphotos">
              <div class="secondphoto">
                  <img class="secondimg" src="${product.colors[0].photos[1]}" alt="">
              </div>
              <div class="secondphoto">
                  <img class="secondimg" src="${product.colors[0].photos[2]}" alt="">
              </div>
          </div>
      </div>
      <div class="productright">
          <div class="brandname">${product.brand}</div>
          <div class="productname">${product.title}</div>
          <div class="starsandreviews">
              <div class="stars">
                  <a class="productstar" href=""><i class="bx bxs-star"></i></a>
                  <a class="productstar" href=""><i class="bx bxs-star"></i></a>
                  <a class="productstar" href=""><i class="bx bxs-star"></i></a>
                  <a class="productstar" href=""><i class="bx bxs-star"></i></a>
                  <a class="productstar" href=""><i class="bx bxs-star"></i></a>
              </div>
              <div class="reviews">
                  ${product.review} reviews
              </div>
          </div>
          <div class="productcost">$${product.price}</div>
          <div class="producttext">${product.description}</div>
          <div class="productsizeboxes">

          </div>
          <div class="productMorecolors">
              <div class="promorecolors">More colors:</div>
              <div class="morecolorsimages"></div>
          </div>
          <div class="productcontacts">
              <a class="askquestionproduct" href=""><i class="bi bi-question-circle"></i>Ask a question</a>
              <a class="shareproduct" href=""><i class="lni lni-share"></i>Share</a>
          </div>
          <div class="stocknumber">Hurry up! Only <span style="color: red; font-family: inssbold;">10
                  item(s)</span> items left in stock</div>
          <div class="agreement">
              <input type="checkbox"> I agree with Terms & Conditions
          </div>
          <div class="buyitnow">
              <div class="toCartNumber">
                  <button class="toCNMinus"><i class = "lni lni-minus"></i></button>
                  <div class="toCNNumber">1</div>
                  <button class="toCNPlus"><i class = "bi bi-plus-lg"></i></button>
              </div>
              <button class="buyitnowbutton">Add to Cart</button>
              <button id=${product.id} class="buyItNowLike ${checkProductInWishlish(product.id)? "buyItNowLikeBlack" : ""}"><i class = "lni lni-heart"></i></button>
              <button class="buyItNowCompare"><i class = "lni lni-layers"></i></button>
          </div>
          <div class="productspecs">
              <div class="prospec">Sku: ${product.sku}</div>
              <div class="prospec">Available: Instock</div>
              <div class="prospec">Collections: Bestseller, Leggings, Loungewear, Shorts, Sport Bras, Tennis</div>
          </div>
          <div class="productdelivery">
              <div class="productdeliveryleft">
                  <a class="deliveryicon" href=""><i class="icofont-vehicle-delivery-van"></i></a>
                  <div class="deliverytext">Estimate delivery times: 3-5 days International.</div>
              </div>
              <div class="productdeliveryline"></div>
              <div class="productdeliveryright">
                  <a class="deliveryicon" href=""><i class="bi bi-box-seam"></i></a>
                  <div class="deliverytext">Free shipping & returns: On all orders over $150.</div>
              </div>
          </div>
          <div class="guarantee">
              <div class="guaranteetitle">Guarantee Safe Checkout:</div>
              <img class="guaranteeimg" src="./src/images/guarantee.png" alt="">
          </div>
          <div class="productOpen">
              <div class="shopleftbuttondiv">Description<button class="proleftplus"><i
                          class="bi bi-plus-lg"></i></button></div>
    
              <div class="descriptioncontent">
                  <div class="descfirsttext">Product are cut from ripstop that boasts a comfortable, stretchy
                      quality and detailed with an oversized take on utility pockets.</div>
                  <div class="descfeatures">Features Product:</div>
                  <div class="descfeaturescategory">• Tonal stitching: 97% cotton, 3% elastane.<br>
                      • Supple and stretch knit with a rich touch of wool.<br>
                      • Model: Model is 6′1″, wearing a size S.<br>
                      • Caring for your clothes is caring for the environment.</div>
                  <div class="carerins">Care Instructions:
                      <img class="descimg" src="./src/images/productdesc.png" alt="">
                  </div>
                  <div class="careinscategory">• Machine wash in cold water at 30°C / 85 °F.<br>
                      • Do not bleach.<br>
                      • Do not tumble dry.<br>
                      • Do not dry clean.Iron at low temperature.</div>
                  <div class="destlasttext">Product feature front slash pockets, oversized zipped utility-pockets
                      and two zipped back pockets. This design is cut from lightweight, breathable nylon-ripstop
                      blended with stretch for optimal comfort.</div>
              </div>
          </div>
    
          <div class="productOpen">
              <div class="shopleftbuttondiv">Shipping and Returns<button class="proleftplus"><i
                          class="bi bi-plus-lg"></i></button></div>
    
              <div class="descriptioncontentsecond">
                  <div>We offer fast and reliable shipping for all our clothing items. Orders are processed within
                      <span>1-2 business days</span> and shipped via standard delivery, which typically takes 3-5
                      business days.<br><br>
    
                      Express shipping options are also available at checkout for an additional fee, ensuring your
                      fashion essentials arrive even sooner. Enjoy <span>free shipping</span> on orders <span>over
                          $150.</span> For any questions regarding your order, please contact our customer service
                      team for assistance.</div>
              </div>
          </div>
    
          <div class="productOpen">
              <div class="shopleftbuttondiv">Return Policies<button class="proleftplus"><i
                          class="bi bi-plus-lg"></i></button></div>
    
              <div class="descriptioncontentthird">
                  Provided the conditions in our refund policy have been met, refunds will be processed using the
                  original form of payment. You can return an item purchased online by posting it to us. Please
                  contact customer service for return address. Please note that delivery costs will be excluded
                  from the refund unless goods are returned in accordance with your statutory rights (e.g. they
                  are faulty or not as ordered).<br><br>
    
                  • The items with the original receipt are returned within 30 days of purchase.<br>
                  • Items must be in the original condition as purchased with all labels/tickets attached.<br><br>
                  Provided the conditions in our refund policy have been met, refunds will be processed using the
                  original form of payment. You can return an item purchased online by posting it to us. Please
                  contact customer service for return address. Please note that delivery costs will be excluded
                  from the refund unless goods are returned in accordance with your statutory rights (e.g. they
                  are faulty or not as ordered).
              </div>
          </div>
      </div>
    </div>
    
    `




            locateSizes();
            locateColors();
            changeColor();
            const buyitnowbutton = document.querySelector(".buyitnowbutton");
            buyitnowbutton.addEventListener("click", () => {

                if (selectedSpec.color !== "" && selectedSpec.size !== "") {
                    addToCart({ id: productId, ...selectedSpec })
                }
            });
        }

        toCNNumber = document.querySelector(".toCNNumber")
        const toCNPlus = document.querySelector(".toCNPlus")
        const toCNMinus = document.querySelector(".toCNMinus")

        toCNPlus.addEventListener("click", incrementCount)
        toCNMinus.addEventListener("click", decrementCount)

        const buyItNowLike = document.querySelector(".buyItNowLike");

        buyItNowLike.addEventListener("click", (e) => {
            e.stopPropagation();
            const ProductId = e.currentTarget.getAttribute("id");
            if(checkProductInWishlish(ProductId)){
                removeFromWishlist(ProductId);
                console.log("salam");
                
                buyItNowLike.classList.remove("buyItNowLikeBlack")
            }else{
                console.log("sagol");
                
                saveToWishlist(ProductId);
                buyItNowLike.classList.add("buyItNowLikeBlack")
            }
        });

    } catch (error) {
        console.log(error);
    }
}






window.customMethods = {
    ...window.customMethods,
    selectSize: function (size) {
        selectedSpec.size = size;
        console.log(size);

    },

    selectColor: function (color) {
        console.log(color);
        selectedSpec.color = color;
    }
}
async function locateSizes() {
    const productsizeboxes = document.querySelector(".productsizeboxes");

    productsizeboxes.innerHTML = '';

    for (let i = 0; i < product.sizes.length; i++) {
        productsizeboxes.innerHTML += `
        <div class="prosizebox">
            <button  onclick="customMethods.selectSize('${product.sizes[i]}')"
            
            class="prosizeboxs">${product.sizes[i]}</button>
        </div>
`
    }
}

async function locateColors() {
    const morecolorsimages = document.querySelector(".morecolorsimages");

    for (let i = 0; i < product.colors.length; i++) {
        morecolorsimages.innerHTML += `
                  <div id=${i} onclick="customMethods.selectColor('${product.colors[i].name}')" class="morecolorsimagesdiv">
                      <img class="morecolorimage" src="${product.colors[i].photos[0]}" alt="">
                  </div>
    `;
    }
}


function incrementCount() {
    toCNNumber.innerHTML = ++selectedSpec.count
}
function decrementCount() {
    if (selectedSpec.count > 1) {
        toCNNumber.innerHTML = --selectedSpec.count
    }
}

async function changeColor() {
    const morecolorsimagesdiv = document.querySelectorAll(".morecolorsimagesdiv");
    const productleft = document.querySelector(".productleft")

    for (let i = 0; i < morecolorsimagesdiv.length; i++) {
        morecolorsimagesdiv[i].addEventListener("click", (e) => {
            const colorId = e.currentTarget.getAttribute("id");
            console.log(colorId);

            productleft.innerHTML = `
           <div class="mainphoto">
            <img class="mainimg" src="${product.colors[colorId].photos[0]}" alt="">
            </div>
            <div class="secondphotos">
            <div class="secondphoto">
                <img class="secondimg" src="${product.colors[colorId].photos[1]}" alt="">
            </div>
            <div class="secondphoto">
                <img class="secondimg" src="${product.colors[colorId].photos[2]}" alt="">
            </div>
            </div>
           `
        });
    }
}

function saveToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}
getProducts();






