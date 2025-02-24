import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage.js";

let wishlish = loadFromLocalStorage("wishIds") || [];

function saveToWishlist(id) {
    if(!wishlish.includes(id)){
        wishlish.push(id);
        saveToLocalStorage("wishIds", wishlish);
    }
}

function removeFromWishlist(id) {
    wishlish = wishlish.filter(wishId => wishId !== id);
    saveToLocalStorage("wishIds", wishlish);
    return wishlish;
}

function checkProductInWishlish(id) {
    return wishlish.find(wishId => wishId == id);
}

export { saveToWishlist, removeFromWishlist, checkProductInWishlish }