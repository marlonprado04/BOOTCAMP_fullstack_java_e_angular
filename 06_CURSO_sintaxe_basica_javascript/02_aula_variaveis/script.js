// boleanos recebem verdadeiro ou falso
var boleano = true;
// Para saber o tipo usar o método type of
console.log(typeof(boleano));

// number recebem números
var tipoNumerico = 1;
// Para saber o tipo usar o método type of
console.log(typeof(tipoNumerico));

// string recebem caracteres
var tipoString = "Marlon";
// Para saber o tipo usar o método type of
console.log(typeof(tipoString));

// ---------------------------

// Variáveis

// Variável do tipo var
var variavelVazia; // criando variável vazia
console.log(variavelVazia); // retorna undefined, pois não há nada nela

var variavelNome = "Joana"; // Criando variável string
variavelNome = "Marlon"; // Alterando valor da variável
console.log(variavelNome);; // Imrpime o último valor armazenado

// Variável do tipo let

let variavelNome2 = "João"; 
console.log(variavelNome2);

// Variável do tipo const
const variavelConstante = "marlon"; // Criando const do tipo string 
console.log(variavelConstante); // Imprime marlon
//variavelConstante = "Joana"; // Retorna erro. Const não permite alteração


// --------------------------

// Escopos

var escopoGlobal = "global";

function escopoLocal(){
    let escoloLocalInterno = "local";
    console.log(escoloLocalInterno);
}

console.log(escopoGlobal); // imprime variável criada no escopo global
//console.log(escoloLocalInterno); // dá erro, pois variável foi criada localmente
escopoLocal(); // Executa função

// ---------------------------------

// Operadores aritméticos

var adicao = 1 + 1; // Armazena 2
var subtracao = 5 - 2; // Armazena 3
var multiplicacao = 5 * 2; // Armazena 10
var divisao = 14 / 2; // Armazena 7
var divisaoInteira = 10 % 3; // Armazena 3
var divisaoInteira = 10 ** 3; // Armazena 1000

// ---------------------------------

// Operadores relacionais
var maiorQue = 1 > 0; // Armazena true
var menorQue = 0 < 1; // Armazena true
var maiorOuIgual = 1 >= 1; // Armazena true
var menorOuIgual = 1 <= 1; // Armazena true

// ---------------------------------------

// Operadores lógicos

var operadorE = true && false; // Retorna false
var operadorOu = true || false; // Retorna true
var operadorNao = !true; // Retorna false 