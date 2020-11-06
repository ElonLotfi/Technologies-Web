
// initialiser la liste de produit // le probleme ou appeler cette fonction 

function initProducts() {
    var listProduct = sessionStorage.getItem("prod");
    if (listProduct != null) {
        var myProducts = sessionStorage.getItem('prod');
        sessionStorage.setItem("prod", myProducts);
    } else {

        var products = new Array();
        sessionStorage.setItem("prod", products);
    }

}



// ajouter un produit 
function addProductToBasket(newProduct) {
    var products = sessionStorage.getItem("prod");
    var get = new Array();
    get.push(products);
    get.push(newProduct);
    sessionStorage.setItem("prod", get);
    console.log(get)



}

function getProducts() {
    var get = new Array();
    get.push(sessionStorage.getItem("prod"))
    return get;
}

export const basketService = {
    addProductToBasket,
    getProducts,
    initProducts
}