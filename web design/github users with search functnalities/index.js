
let productData = [];
async function getUser() {
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    productData = data;
    console.log(productData)
    listData(productData);
}
const container = document.getElementById("output");

function listData(products) {
    let productsData = products.map((product, index) => {
        return `
        
        <div class="product-card">
            <div class="product-card__image">
                <img src=${product.image} alt=${product.title}>
            </div>
            <div class="product-card__info">
                <h2 class="product-card__title">${product.title}</h2>
                <p class="product-card__description">${product.description}</p>
                <div class="product-card__price-row">
                    <span class="product-card__price">$${product.price}</span>
                    <button class="product-card__btn">Add to Cart</button>
                </div>
            </div>
        </div>
        `
    }).join("")
    container.innerHTML = productsData
}




getUser();
