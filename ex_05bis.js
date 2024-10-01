const cmb = 5 ;
function getBasketContent(cmb) {
    const fruits = ["strawberry", "strawberry", "strawberry", "apple", "apple", "lime", "lime", "peach", "pear", "pear"];

    if (cmb > fruits.length) {
        console.log("Too many fruit(s) selected.");
        return []; 
    } else {
        console.log(cmb, "fruit(s) selected");
        
        return fruits.slice(0,cmb);
    }
}

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
    
    const fruits = getBasketContent(cmb);
    showMyBasket(fruits); // Affiche le contenu du panier
}
