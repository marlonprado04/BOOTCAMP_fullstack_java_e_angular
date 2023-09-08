
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// Fetch nos retorna uma promise 
// Que é a promessa de um resultado assincrono de uma busca na API
// Fetch usa o método then para trabalhar com o resultado da consulta, que recebe uma função callback
fetch(url).then(function (response){
    console.log(response);
});

const x = 10 + 10;
console.log(x);