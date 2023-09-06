import calculateInitialStock from "./calculateInitialStock.js";
import calculateSoldProducts from "./calculateSoldProducts.js";

function calculateProductsToSell(productArray) {
    const initialProducts = calculateInitialStock(productArray);
    const soldProducts = calculateSoldProducts(productArray);
    return initialProducts - soldProducts;
}

export default calculateProductsToSell;