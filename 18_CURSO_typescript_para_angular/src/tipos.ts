// Existem vários tipos que podemos trabalhar em TS, dentre eles

// Tipos primitivos: boolean, number e string

// boolean

// De forma explícita
let estaLigado: boolean = false; // boolean

// De forma inferida
let estaLigado2 = false; // boolean

// --------------------------------------
// string
let nome: string = "Marlon";

// --------------------------------------
// number
let idade: number = 30;

// podemos colocar ponto flutuante em tipo number
let altura: number = 1.7;


//---------------------------------------------------------

// Tipos especiais: null, undefined

//null -> só aceita valor nulo, nada mais
let nulo: null = null;

//undefined -> só aceita undefined, nada mais
let indefinido: undefined = undefined;

//---------------------------------------------------------
// Tipos abrangentes: void, any

// void -> vazio. Podemos usar em funções que não retornam nada
let vazio: void;

// any -> aceita qualquer valor. Útil para funções que não temos certeza do retorno, podendo ser uma string, um objeto, um número, etc
let qualquer: any = 1; 
let qualquer2: any = "1";
let qualquer3: any = true; 

