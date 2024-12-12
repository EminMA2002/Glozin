const hamurgeropened = document.querySelector(".hamurgeropened")
const hamurgeropenedchild = document.querySelector(".hamurgeropenedchild")
const hamburgermenuicon = document.querySelector(".hamburgermenuicon")

hamburgermenuicon.addEventListener("click", () => {
    hamurgeropened.style.width = "100%"
    console.log(window.innerWidth);

    if (window.innerWidth < 768) {
        hamurgeropenedchild.style.width = "70%"
    } else {
        hamurgeropenedchild.style.width = "40%"
    }
})

hamurgeropened.addEventListener("click", () => {
    hamurgeropened.style.width = "0"
})

hamurgeropenedchild.addEventListener("click", (e) => {
    e.stopPropagation()
})


window.addEventListener("resize", () => {
    hamurgeropened.style.width = "0"
})


const searchiconhamburger = document.querySelector(".searchiconhamburger")
const searchopened = document.querySelector(".searchopened")
const searchopenedchild = document.querySelector(".searchopenedchild")

searchiconhamburger.addEventListener("click", () => {
    searchopened.style.width = "100%"
    searchopenedchild.style.width = "60%"
})
searchopened.addEventListener("click", () => {
    searchopened.style.width = "0%"
})
searchopenedchild.addEventListener("click", (e) => {
    e.stopPropagation();
})


const person = document.querySelector(".personicon");
const signinx = document.querySelector(".signinx");
const signinfather = document.querySelector(".signinfather");
const signinchild = document.querySelector(".signinchild");
const signincreatebutton = document.querySelector(".signincreatebutton");
const signupfather = document.querySelector(".signupfather");
const signupchild = document.querySelector(".signupchild");
const signuploginbutton = document.querySelector(".signuploginbutton");

person.addEventListener("click", () => {
    if (signinfather.classList.contains("displaynone")) {
        signinfather.classList.remove("displaynone")
    }
});

signinx.addEventListener("click", () => {
    signinfather.classList.add("displaynone")
});

signinfather.addEventListener("click", () => {
    signinfather.classList.add("displaynone")
});

signinchild.addEventListener("click", (e) => {
    e.stopPropagation();
});

signincreatebutton.addEventListener("click", () => {
    signinfather.classList.add("displaynone")
    signupfather.classList.remove("displaynone")
})

signuploginbutton.addEventListener("click", () => {
    signupfather.classList.add("displaynone")
    signinfather.classList.remove("displaynone")
})

signupfather.addEventListener("click", () => {
    signupfather.classList.add("displaynone")
});

signupchild.addEventListener("click", (e) => {
    e.stopPropagation();
});


const bag = document.querySelectorAll(".bag")
const openedBag = document.querySelector(".openedBag")
const openedBagChildHeader = document.querySelector(".openedBagChildHeader button")
const openedBagChild = document.querySelector(".openedBagChild")

for (let i = 0; i < bag.length; ++i) {
    bag[i].addEventListener("click", () => {
        openedBag.classList.remove("displaynone")
    })
}

openedBagChildHeader.addEventListener("click", () => {
    openedBag.classList.add("displaynone")
})

openedBagChild.addEventListener("click", (e) => {
    e.stopPropagation()
})

openedBag.addEventListener("click", () => {
    openedBag.classList.add("displaynone")
})




// Cart Items



function saveToLS(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLS(key) {
    return JSON.parse(localStorage.getItem(key));
}

let CartProductsIds = loadFromLS("cartPro") || [];
const cartContents = document.querySelector(".cartContents");

const notificationbag = document.querySelectorAll(".notificationbag")



const API_URL_NAV = "../../db/products.json"

export async function getProducts() {
    try {
        const res = await fetch(API_URL_NAV);
        const data = await res.json();
        console.log(data);
        CartProductsIds = loadFromLS("cartPro") || [];



        for (let i = 0; i < CartProductsIds.length; ++i) {
            const product = data.products.find(product => product.id === CartProductsIds[i]);
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
                        <div class="addedCartSize">Size: ${product.sizes}</div>
                        <div class="addedCartCost">$${product.price}</div>
                        <div class="addedCartNumber">
                            <button class="addedToCNMinus"><i class="lni lni-minus"></i></button>
                            <div class="addedToCNNumber">1</div>
                            <button class="addedToCNPlus"><i class="bi bi-plus-lg"></i></button>
                        </div>
                    </div>
                    <div class="addedCartRight">
                        <button class="addedCartEdit"><i class="bi bi-pencil-square"></i></button>
                        <button type="button" id="${product.id}" class="addedCartDelete"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            `;
            }
        }

        const addedCartDelete = document.querySelectorAll(".addedCartDelete")


        for (let i = 0; i < addedCartDelete.length; i++) {
            addedCartDelete[i].addEventListener("click", (e) => {
                const inCartProductId = e.currentTarget.getAttribute("id");
                deleteCartItem(inCartProductId);
            })
        }
    } catch (error) {
        console.log(error);
    }
}

let newCartProductsIds = [];

function deleteCartItem(inCartProductId) {
    for (let i = 0; i < CartProductsIds.length; ++i) {
        if (CartProductsIds[i] !== inCartProductId) {
            newCartProductsIds.push(CartProductsIds[i]);

        }


    }
    CartProductsIds = newCartProductsIds;
    saveToLS("cartPro", CartProductsIds);
    getProducts();
}

getProducts();


export function bagNotification() {
    for (let i = 0; i < CartProductsIds.length; i++) {
        notificationbag[i].innerHTML = CartProductsIds.length;
    }
}


bagNotification();