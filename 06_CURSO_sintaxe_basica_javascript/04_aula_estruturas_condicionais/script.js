var jogador1 = 1;
var jogador2 = 0;
var placar;

if(jogador1 > 0){
    console.log("jogador 1 marcou ponto");
    placar = jogador1 > jogador2;
}else if(jogador2 > 0){
    console.log("Jogador 2 marcou ponto");
    placar = jogador2 > jogador1;
} else{
    console.log("Nenhum jogador marcou ponto");
}

// ---------------------------------

// if ternário

jogador1 > 0 ? console.log("Jogador 1 marcou ponto") : console.log("Jogador 1 não marcou ponto")

// ---------------------------------

// switch / case

switch(placar){
    case placar = jogador1 > jogador2:
        console.log("Jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("Jogador 2 ganhou");
        break;
    default:
        console.log("Deu empate");
}

// -----------------------------------

// Estruturas de repetição

// for

var array = [1, 2, 3, 4, 5];
var objeto = {prop1: "val1", prop2: "val2", prop3: "val3"};

// executa uma instrução até que seja falsa
for (let indice = 0; indice < array.length; indice ++){
    console.log(indice);
}

// -----------------

var array = [1, 2, 3, 4, 5];
var objeto = {prop1: "val1", prop2: "val2", prop3: "val3"};

// for/in com array
for (let i in array){
    console.log(i);
}

// for/in com objeto
for (i in objeto){
    console.log(i);
}

// -------------------

var array = [1, 2, 3, 4, 5];
var objeto = {prop1: "val1", prop2: "val2", prop3: "val3"};

// for/of

for (i of array){ 
    console.log(i)
}

// com objetos

for (i of objeto.prop1){
    console.log(i); // printa cada letra da propriedade 1
}

// ------------------

// while
var a = 0;
while (a<10){
    console.log(a);
    a++;
}

// -----------------

// do / while

do{
    console.log(a)
    a++;
}while(a<10);