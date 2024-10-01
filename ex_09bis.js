const div = []
function operation(a,b,cal){
		let vre=a + cal + b
    vre.toString()
    div.push(vre)
    
}
operation(23,98,"-")
console.log(div[0])

const diva = [];

function operationa(a, b, cal) {
    let result;

    switch (cal) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b !== 0) {
                result = a / b;
            } else {
                console.log("Ne peux pas diviser par 0");
                return null; 
            }
            break;
        default:
            console.log("Erreur,renvoie null");
            return null; 
    }

    diva.push(result.toString()); 
    return result; 
}

function doOperation(operationString) {
   
    const parts = operationString.split(" ");
    const a = parseFloat(parts[0]); 
    const operator = parts[1]; 
    const b = parseFloat(parts[2]); 

    
    return operationa(a, b, operator);
}

console.log(doOperation("23 - 98")); 
