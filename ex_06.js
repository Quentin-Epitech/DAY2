fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getIndexFromName(test) {
     const index = fruits.indexOf(test)
     	if (index === -1)
      return null
      
        return index
 }

const test="Mango"
displayResult(getIndexFromName(test));

