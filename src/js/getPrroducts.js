const API_URL = "../../db/products.json"

async function getProducts() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getProducts();