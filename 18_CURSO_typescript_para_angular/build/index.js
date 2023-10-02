"use strict";
// Generics
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stringArray = concatArray(["Marlon", "João"], ["Goku"]);
console.log(numArray);
console.log(stringArray);
