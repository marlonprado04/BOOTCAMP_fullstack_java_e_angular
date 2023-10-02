"use strict";
// Functions em TS não são tão diferentes de JS
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// ----------------------------
// async
// Funções async retornam promises, precisamos tipar o retorno da função de acordo
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Marlon";
    });
}
