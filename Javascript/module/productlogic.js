import products from "./productdata.js";
import addcart from "./addtocart.js"
console.log("availables products")

products.forEach((product, index) => {
    let count = 0;
    console.log(`product:${index + 1}${product.name},${product.price}`)
});
products.find(() => { })
addcart()