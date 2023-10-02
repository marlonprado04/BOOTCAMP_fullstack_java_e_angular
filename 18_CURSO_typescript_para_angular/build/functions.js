"use strict";
// Functions em TS não são tão diferentes de JS
// Mas em TS, podemos tipar os atributos e a saída
function addNumber(x, y) {
    return x + y;
}
// Se formos associar essa função à uma variável, a variável precisa ser do tipo da saída da função
let soma = addNumber(4, 5);
console.log(soma);
// ----------------------------
// Funções multi tipos
// Em typescript também podemos adicionar um "or" no tipo
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("11121"), CallToPhone(131313));
