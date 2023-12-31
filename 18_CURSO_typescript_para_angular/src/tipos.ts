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

//---------------------------------------------------------
// Tipo objeto

// Objeto sem previsibilidade (não recomendado para uso)
// Criando uma variável do tipo objeto o TS não aponta
// erros ao tentar passar qualquer valor, dessa forma
// o objeto fica imprevisível sobre sua entrada

let produto: object ={ 
    name: "Felipe",
    cidade: "SP",
    idade: 30
}

// Objeto com previsibilidade (recomendado)
// Objetos assim tem seus atributos estipulados antes
// assim o TS aponta erros se faltar alguma informação previamente solicitada

type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let produtoNovo: ProdutoLoja = {
    nome:"Tênis",
    preco:100,
    unidades:10
}

//---------------------------------------------------------
// Tipo array

// Existem duas formas de criar arrays, mas que na prática são a mesma coisa

let dados: string[] = ["Marlon", "Ana", "Loren"]
let dados2: Array<string> = ["Marlon", "Ana", "Loren"]

// A primeira forma parece mais legível, talvez seja a melhor para uso

// Array de multi tipos
// Podemos criar um array qye aceita vários tipos da seguinte forma

let infos:(string | number)[] = ["Marlon", 21, "Ana", 10]
let infos2: Array<(string | number)> = ["Marlon", 21, "Ana", 10]

//---------------------------------------------------------

// Tuplas
// Em tuplas nós abrimos o colchetes diretao, sem passar o tipo antes

let boleto:[string, number, number] = ["conta de agua", 120.00, 13145125125454]

// Se tentar inverter a ordem estipulada o TS aponta erro

//---------------------------------------------------------

// O TS aproveita os métodos do JS para, por exemplo, os arrays

dados.push("Olá");
dados.map((dado) => console.log(dado));

//---------------------------------------------------------

// Dates

// Dates são do interfaces do tipo data e seguem o formato americano na sua criação

let aniversario:Date = new Date("2000-01-10 03:40")

console.log(aniversario.toString())