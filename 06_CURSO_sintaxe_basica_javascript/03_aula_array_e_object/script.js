// Arrays

let array = ["String", 1, true]; // podemos armazenar diversos tipos
console.log(array);

let arrayComArray = [array, 1, 2, 3, 4] // Podemos armazenar um array dentro do array
console.log(arrayComArray); 

// Acessando índice
console.log(array[0])

// ----------------------------

// Manipulando arrays

// forEach recebe uma função como parâmetro
// ele faz uma repetição da função para cada ítem do array
array.forEach(function(item, indice){console.log(item, indice)})// imprimindo valor e índice

// push
array.push("novo valor"); // empurrando novo valor para o array
console.log(array);// retorna array com o novo valor incluso

//pop
array.pop(); // remove último valor do array
console.log(array);

// shift
array.shift(); // remove o primeiro valor do array
console.log(array);

// unshift
array.unshift("novo valor no início"); // adiciona novo valor no início do array
console.log(array);

// indexOf
console.log(array.indexOf(true)); //retorna o índice de um valor pesquisado

// splice
// recebe um start, o número de elementos que vai deletar e o novo elemento
array.splice(0, 2);
console.log(array);


// slice
// retorna um novo array cortado
// recebe como parâmetro o índice inicial e o final
var novoArray = array.slice(0, 2)


// -----------------------------------

// Objetos

var objeto = {string: "string", number: 1, booleana: true, array: [1, 2], objetoInterno: {objetoInterno: "objetoInterno"}}

console.log(objeto) // printa todo o objeto

console.log(objeto.booleana) // printa apenas a propriedade booleana

// Desestruturação de objetos

var string = objeto.string; // passando propriedade string para variável

console.log(string); // Printando variável do objeto desestruturado

// Outra forma de fazer desestruturação, com {}

var {string, booleana, number, objetoInterno} = objeto;
console.log(string, booleana, number, objetoInterno)