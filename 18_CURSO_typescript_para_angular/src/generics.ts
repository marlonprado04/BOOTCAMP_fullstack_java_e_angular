// Generics

// Create function to receive and concatenate generic array information and return a generic array information
// T on uppercase represents a generic information
function concatArray<T>(...itens:T[]): T[]{
    return new Array().concat(...itens);
}

// Create new arrays to string and number
const numArray = concatArray<number[]>([1,5], [3]);
const stringArray = concatArray<string[]>(["Marlon", "João"], ["Goku"]);

// Print created arrays
console.log(numArray);
console.log(stringArray);

// When creating an array of number, it not allow incrementing with string, because was delimited of generics
// numArray.push("Marlon");

