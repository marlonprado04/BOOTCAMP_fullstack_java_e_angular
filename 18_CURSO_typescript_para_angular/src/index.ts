// Generics

// Create function to receive and concatenate any types of array and return any types of array
function concatArray(...itens:any[]): any[]{
    return new Array().concat(...itens);
}

// Create new arrays to string and number
const numArray = concatArray([1,5], [3]);
const stringArray = concatArray(["Marlon", "João"], ["Goku"]);

// Print created arrays
console.log(numArray);
console.log(stringArray);

// This code has a problema:
// When creating an array of number, it allows incrementing with string
numArray.push("Marlon");

