const DB_URL = "../../../db/products.json";


let products = [];

async function fetchProducts() {
    const res = await fetch(DB_URL);
    const data = await res.json();
    products = data.products;
}

async function getAllProducts() {
    await fetchProducts();
    return products
}

async function getproductById(id) {
    await fetchProducts();
    return products.find(product => product.id == id)
}

async function getProductByCount(count) {
    await fetchProducts();
    return products.slice(0, count)
}

export { getProductByCount, getproductById, getAllProducts }