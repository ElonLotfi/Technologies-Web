
// initialiser la liste de produit // le probleme ou appeler cette fonction 

function initProducts(type) {
    var listProduct = sessionStorage.getItem(type);
    if (listProduct != null) {
        var myProducts = sessionStorage.getItem(type);
        sessionStorage.setItem(type, myProducts);
    } else {

        var products = new Array();
        
        sessionStorage.setItem(type, products);
    }

}



// ajouter un produit 
function addProductToBasket(type,newProduct) {
    var products = sessionStorage.getItem(type);
    var get = new Array();
    get.push(products);
    get.push(newProduct);
    sessionStorage.setItem(type, get);

}

// Ajouter le prix de produit et le stocker dans la session
function updatePrice(price){
    sessionStorage.setItem("price", price);
}
// recuperer le prix de produit depuis la session

function getPrice(){
    return sessionStorage.getItem("price");
}
// recuperer le menu depuis la session
function getProducts(type) {
    var get = new Array();
    get.push(sessionStorage.getItem(type))
    return get[0];
}

export const basketService = {
    addProductToBasket,
    getProducts,
    initProducts,
    updatePrice,
    getPrice
}