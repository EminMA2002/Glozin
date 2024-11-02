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
