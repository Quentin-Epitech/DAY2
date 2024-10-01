fruits = ["Blackberries", "Mango", "Kiwi", "Peaches", "Strawberry"];
function getFruit(ind) {
    if (typeof ind === 'string') {
        
        const index = fruits.indexOf(ind);
           if (index === -1) {
               return null;
        }
        return index;
    } else if (typeof ind === 'number') {
        
        if (ind === -1) {
            return fruits[fruits.length - 1]; 
        }
        if (ind < 0 && ind >= fruits.length) {
            return null; 
        }
        return fruits[ind];
    } else {
        return "Paramètre invalide";  
    }
}
let ind=getFruit(3)
displayResult(ind)