import { saveToLocalStorage, loadFromLocalStorage } from "../utils/localStorage.js";
import {getAllProducts} from "../utils/productController.js"

window.customMethods = window.customMethods || {};
let products = [];
// html elements
const cartContents = document.querySelector(".cartContents");
const notificationbag = document.querySelectorAll(".notificationbag")
const openedBagFooterHeadCost = document.querySelector(".openedBagFooterHeadCost")

// Variables
const DB_URL = "../../../db/products.json";
let cartItems = loadFromLocalStorage("cart") || [];
updateCart();


function updateCart() {
    saveToLocalStorage("cart", cartItems);
    renderCart()
    let temp = 0
    for (let i = 0; i < cartItems.length; i++) {
        temp += cartItems[i].count
    }
    for (let i = 0; i < notificationbag.length; i++) {
        notificationbag[i].innerHTML = temp;
        notificationbag[i].classList.remove("d-none")
        if (temp == 0) {
            notificationbag[i].classList.add("d-none")
        }
    }

    
    if(products.length > 0){
        openedBagFooterHeadCost.textContent ="$" + cartItems.reduce((pre, cur) => { return pre + products.find(product => product.id == cur.id).price * cur.count }, 0)
    }

    console.log(products.length);
    
}
async function renderCart() {

    try {
        if (products.length == 0) {
            const data = await getAllProducts();            
            products = data;
            updateCart();
        }

        cartContents.innerHTML = "";
        for (let i = 0; i < cartItems.length; ++i) {
            const product = products.find(product => product.id === cartItems[i].id);
            if (product) {
                let shorttitle = "";
                function truncateText(text, maxLength) {
                    if (text.length <= maxLength) {
                        shorttitle = text;
                    }

                    shorttitle = text.substring(0, maxLength) + '...';
                }

                truncateText(product.title, 20)

                cartContents.innerHTML += `
                <div id="${product.id}" class="cartContent">
                    <div class="addedCartPhoto"><img class="addedCartImg" src="${product.colors[0].photos[0]}" alt=""></div>
                    <div class="addedCartMiddle">
                        <div class="addedCartName">${shorttitle}</div>
                        <div class="addedCartSize">Size: ${cartItems[i].size}</div>
                        <div class="addedCartCost">$${product.price}</div>
                        <div class="addedCartNumber">
                            <button onclick="customMethods.decrementInCart(${i})" class="addedToCNMinus"><i class="lni lni-minus"></i></button>
                            <div class="addedToCNNumber">${cartItems[i].count}</div>
                            <button onclick="customMethods.incrementInCart(${i})" class="addedToCNPlus"><i class="bi bi-plus-lg"></i></button>
                        </div>
                    </div>
                    <div class="addedCartRight">
                        <button class="addedCartEdit"><i class="bi bi-pencil-square"></i></button>
                        <button onclick="customMethods.removeFromCart(${i})" type="button" id="${product.id}" class="addedCartDelete"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            `;
            }
        }

    } catch (error) {
        console.log(error);
    }
}

function addToCart({ id, size, color, count }) {
    const index = cartItems.findIndex(item => item.id == id && item.size == size && item.color == color)
    if (index !== -1) {
        cartItems[index].count += count;
    } else {
        cartItems.push({ id, size, color, count });
    }
    updateCart();
}
function removeFromCart(index) {
    cartItems = cartItems.filter((_, i) => i !== index)
    updateCart();
}
function incrementCount(index) {
    console.log(index);
    cartItems[index].count++
    updateCart();

}
function decrementCount(index) {
    console.log(index);
    cartItems[index].count--
    if (cartItems[index].count < 1) {
        removeFromCart(index)
    }
    updateCart();
}

export { addToCart };



window.customMethods["incrementInCart"] = incrementCount;
window.customMethods["decrementInCart"] = decrementCount;
window.customMethods["removeFromCart"] = removeFromCart;

console.log(customMethods);
