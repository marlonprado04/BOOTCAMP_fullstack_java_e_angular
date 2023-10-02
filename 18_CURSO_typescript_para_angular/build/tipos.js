"use strict";
// Existem vários tipos que podemos trabalhar em TS, dentre eles
// Tipos primitivos: boolean, number e string
// boolean
// De forma explícita
let estaLigado = false; // boolean
// De forma inferida
let estaLigado2 = false; // boolean
// --------------------------------------
// string
let nome = "Marlon";
// --------------------------------------
// number
let idade = 30;
// podemos colocar ponto flutuante em tipo number
let altura = 1.7;
//---------------------------------------------------------
// Tipos especiais: null, undefined
//null -> só aceita valor nulo, nada mais
let nulo = null;
//undefined -> só aceita undefined, nada mais
let indefinido = undefined;
//---------------------------------------------------------
// Tipos abrangentes: void, any
// void -> vazio. Podemos usar em funções que não retornam nada
let vazio;
// any -> aceita qualquer valor. Útil para funções que não temos certeza do retorno, podendo ser uma string, um objeto, um número, etc
let qualquer = 1;
let qualquer2 = "1";
let qualquer3 = true;
//---------------------------------------------------------
// Tipo objeto
// Objeto sem previsibilidade (não recomendado para uso)
// Criando uma variável do tipo objeto o TS não aponta
// erros ao tentar passar qualquer valor, dessa forma
// o objeto fica imprevisível sobre sua entrada
let produto = {
    name: "Felipe",
    cidade: "SP",
    idade: 30
};
let produtoNovo = {
    nome: "Tênis",
    preco: 100,
    unidades: 10
};
//---------------------------------------------------------
// Tipo array
// Existem duas formas de criar arrays, mas que na prática são a mesma coisa
let dados = ["Marlon", "Ana", "Loren"];
let dados2 = ["Marlon", "Ana", "Loren"];
// A primeira forma parece mais legível, talvez seja a melhor para uso
// Array de multi tipos
// Podemos criar um array qye aceita vários tipos da seguinte forma
let infos = ["Marlon", 21, "Ana", 10];
let infos2 = ["Marlon", 21, "Ana", 10];
