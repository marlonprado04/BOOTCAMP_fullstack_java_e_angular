# Sintaxe Básica em JavaScript

Resumo: Curso introdutório de JavaScript
Links: GitHub: <https://github.com/marlonprado04/BOOTCAMP_fullstack_java_e_angular/tree/main/06_CURSO_sintaxe_basica_javascript>
Categoria: Curso
Status: In Progress
Conteúdos DB: JavaScript (<https://www.notion.so/JavaScript-f37e965c3648460f9e47b59bd9b762c3?pvs=21>)
Plano de estudos DB: Santander Bootcamp 2023 - Fullstack Java+Angular (<https://www.notion.so/Santander-Bootcamp-2023-Fullstack-Java-Angular-c34a45b6c201403db3aeac2a04333dce?pvs=21>)
Data: 25/08/2023
Instituição ou plataforma: <https://www.notion.so/8dbfd5bea50f4b5394216ad351035a1d>

## Índice

- [Sintaxe Básica em JavaScript](#sintaxe-básica-em-javascript)
  - [Índice](#índice)
  - [Antes de começar](#antes-de-começar)
  - [Apresentação do curso](#apresentação-do-curso)
  - [O que danado é JavaScript?](#o-que-danado-é-javascript)
    - [O que é o JavaScript?](#o-que-é-o-javascript)
    - [Como surgiu?](#como-surgiu)
    - [Para que serve?](#para-que-serve)
    - [Onde usar?](#onde-usar)
    - [Repositório do curso](#repositório-do-curso)
    - [Na prática](#na-prática)
  - [Entendendo variáveis e seus valores](#entendendo-variáveis-e-seus-valores)
    - [O que é tipagem?](#o-que-é-tipagem)
    - [Tipos primitivos](#tipos-primitivos)
    - [O que são variáveis?](#o-que-são-variáveis)
    - [Escopo de variáveis](#escopo-de-variáveis)
    - [Regras de uso de variáveis](#regras-de-uso-de-variáveis)
  - [Atribuição, comparação e comparação idêntica](#atribuição-comparação-e-comparação-idêntica)
    - [Operadores aritméticos](#operadores-aritméticos)
    - [Operadores relacionais](#operadores-relacionais)
    - [Operadores lógicos](#operadores-lógicos)
  - [Vetores e objetos](#vetores-e-objetos)
    - [Vetores ou arrays](#vetores-ou-arrays)
    - [Manipulando arrays](#manipulando-arrays)
    - [Objetos](#objetos)
    - [Manipulando objetos](#manipulando-objetos)
  - [Estruturas condicionais](#estruturas-condicionais)
    - [O que são estruturas condicionais?](#o-que-são-estruturas-condicionais)
    - [if, else if e else](#if-else-if-e-else)
    - [if ternário](#if-ternário)
    - [switch / case](#switch--case)
    - [Estruturas de repetição](#estruturas-de-repetição)
    - [For](#for)
    - [For / in](#for--in)
    - [For/of](#forof)
    - [while](#while)
    - [do/while](#dowhile)
  - [Funções e suas particularidades](#funções-e-suas-particularidades)
    - [O que são funções?](#o-que-são-funções)
    - [Como declarar](#como-declarar)
    - [Funções com parâmetros](#funções-com-parâmetros)
  - [Aprofundando em funções](#aprofundando-em-funções)
    - [Função declarativa](#função-declarativa)
    - [Expressões de funções](#expressões-de-funções)
    - [Arrow Function](#arrow-function)
    - [Criando uma calculadora](#criando-uma-calculadora)
    - [Links e materiais adicionais](#links-e-materiais-adicionais)

## Antes de começar

- [x]  Criar pasta referente ao curso
- [x]  Adicionar link da pasta nos atributos do curso

## Apresentação do curso

O objeto do curso é explicar o que é o JavaScript, para que serve e como utilizá-lo em projetos.

O cursp será dividido em 6 aulas.

## O que danado é JavaScript?

### O que é o JavaScript?

É uma linguagem de alto nível que integra desenvolvimentos de aplicativos e páginas web.

### Como surgiu?

Em 1995 o programador Brendan Eich que trabalhava na Netscape, implementou uma linguagem chamada Mocha e depois mudou para LiveScript. Mas na época o Java estava ficando famoso, então para surfar na onda o desenvolvedor trocou o nome para JavaScript.

### Para que serve?

Para criar scripts dinâmicos permitindo interações de apps e páginas web.

![Untitled](assets/Untitled.png)

### Onde usar?

Podemos usar de várias formas, mas o uso mais comum é com HTML e páginas web em geral.

### Repositório do curso

Para acompanhar o código do curso e etc, podemos acessar o repositório [neste link](https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript)

### Na prática

No curso será usado o VSCode e algumas extensões que estão listadas no arquivo em PDF no repositório.

Para dar início, podemos criar um arquivo `.html` e outro `.js`. No arquivo HTML adicionamos as tags principais e no JS adicionamos `alert("Olá Mundo")` .

Como boa prática adicionamos a tag `<script>` no fim da tag `<body>` do HTML, passando como source o nome do arquivo `.js`.

Abaixo os códigos:

- HTML

    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Meu script em JavaScript</title>
    </head>
    
    <body>
        <h1> Meu primeiro script em JavaScript</h1>
    
        <!-- Boas práticas -->
    
        <!-- Externar o arquivo .js-->
        <!-- Carregar o script no fim da tag body-->
        <script src="script.js"></script>
    </body>
    
    </html>
    ```

- JavaScript

    ```jsx
    alert("E aí rapá")
    ```

## Entendendo variáveis e seus valores

Nesta aula vamos aprender:

- Como funciona a tipagem em JS
- O que são as variáveis e como declarar
- Diferenças entre atribuição, comparação e comparação idêntica
- Operadores aritméticos, relacionais e lógicos

### O que é tipagem?

Tipagem funciona como uma regra no uso das variáveis. Quanto mais forte é a tipagem, mais obrigatória é a declaração do tipo de valor junto da variável.

A tipagem do JavaScriot é fraca. Ao declarar uma variável e atribuir à ela um valor de número 1, ela já é interpretada como number pelo js.

### Tipos primitivos

Alguns tipos primitivos são `boolean` , `string` e `number`.

- Código de exemplo:

    ```jsx
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
    ```

### O que são variáveis?

São caixas que permitem armazenar valores de qualquer tipo.

Para declarar variáveis em JS, temos 3 abordagens:

![Untitled](assets/Untitled%201.png)

- Código de exemplo

    ```jsx
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
    variavelConstante = "Joana"; // Retorna erro. Const não permite alteração
    ```

### Escopo de variáveis

Escopo define a limitação e visibilidade de um bloco de código.

![Untitled](assets/Untitled%202.png)

- Código de exemplo

    ```jsx
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
    ```

### Regras de uso de variáveis

Existem algumas regras para o uso de variáveis, sendo elas:

![Untitled](assets/Untitled%203.png)

## Atribuição, comparação e comparação idêntica

O sinal de “=” no JS não significa igual, mas sim “atribuição”. Quando usamos este sinal, **estamos pedindo para o JS atribuir uma informação à outra**.

![Untitled](assets/Untitled%204.png)

O sinal de “==” faz uma comparação de valores. Quando realizamos uma comparação, o JS retorna um valor booleano, ou seja, `true` ou `false`

![Untitled](assets/Untitled%205.png)

O sinal de “===” faz uma comparação idêntica que não compara somente o valor, mas o tipo também.

![Untitled](assets/Untitled%206.png)

### Operadores aritméticos

Abaixo a lista de operadores aritméticos:

![Untitled](assets/Untitled%207.png)

- Código de exemplo

    ```jsx
    // ---------------------------------
    
    // Operadores aritméticos
    
    var adicao = 1 + 1; // Armazena 2
    var subtracao = 5 - 2; // Armazena 3
    var multiplicacao = 5 * 2; // Armazena 10
    var divisao = 14 / 2; // Armazena 7
    var divisaoInteira = 10 % 3; // Armazena 3
    var divisaoInteira = 10 ** 3; // Armazena 1000
    ```

### Operadores relacionais

Operadores relacionais servem para consultar a relação entre valores, sendo eles:

![Untitled](assets/Untitled%208.png)

- Código de exemplo

    ```jsx
    // ---------------------------------
    
    // Operadores relacionais
    var maiorQue = 1 > 0; // Armazena true
    var menorQue = 0 < 1; // Armazena true
    var maiorOuIgual = 1 >= 1; // Armazena true
    var menorOuIgual = 1 <= 1; // Armazena true
    ```

### Operadores lógicos

Operadores lógicos servem para consultar a lógica, sendo eles:

![Untitled](assets/Untitled%209.png)

- Código de exemplo

    ```jsx
    // ---------------------------------------
    
    // Operadores lógicos
    
    var operadorE = true && false; // Retorna false
    var operadorOu = true || false; // Retorna true
    var operadorNao = !true; // Retorna false
    ```

## Vetores e objetos

Nesta aula veremos:

- O que são vetores ou arrays?
- Como manipular arrays
- O que são objetos
- Desestruturando objetos

### Vetores ou arrays

Arrays são um tipo de lista, onde cada variável possui um índice. Os valores armazenados podem ser de vários tipos.

- Código de exemplo

    ```jsx
    // Arrays
    
    let array = ["String", 1, true]; // podemos armazenar diversos tipos
    
    console.log(array);
    ```

Para acessar determinado índice do array utilizamos a seguinte estrutura:

- Código de exemplo

    ```jsx
    // Acessando índice
    console.log(array[0])
    ```

### Manipulando arrays

Arrays trazem consigo diversos métodos que permitem trabalhar com eles.

Abaixo alguns deles:

![Untitled](assets/Untitled%2010.png)

![Untitled](assets/Untitled%2011.png)

- Código de exemplo

    ```jsx
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
    ```

### Objetos

Objetos são dados que possuem propriedades e valores que definem suas características.

![Untitled](assets/Untitled%2012.png)

### Manipulando objetos

Podemos alterar as propriedades de um objeto ao atribuir elas à uma variável. Chamamos isso de **desestruturação.**

Exemplo:

![Untitled](assets/Untitled%2013.png)

- Código de exemplo

    ```jsx
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
    ```

## Estruturas condicionais

Nessa aula veremos:

- O que são estruturas condicionais?
- Estruturas de decisão
- Estruturas de repetição

### O que são estruturas condicionais?

São instruções para realizar determinadas tarefas a partir de uma condição.

Por exemplo, um jogo precisa mudar o placar toda vez que o jogador fizer um ponto.

### if, else if e else

Podemos usar o if para fazer estabelecer uma condição.

![Untitled](assets/Untitled%2014.png)

- Código de exemplo:

    ```jsx
    var jogador1 = 0;
    var jogador2 = 0;
    var placar;
    
    if(jogador1 > 0){
        console.log("jogador 1 marcou ponto");
    }else if(jogador2 > 0){
        console.log("Jogador 2 marcou ponto");
    } else{
        console.log("Nenhum jogador marcou ponto");
    }
    ```

### if ternário

O `if ternário` serve para fazer a verificação em uma única linha.

![Untitled](assets/Untitled%2015.png)

- Exemplo de código:

    ```jsx
    // if ternário
    
    jogador1 > 0 ? console.log("Jogador 1 marcou ponto") : console.log("Jogador 1 não marcou ponto")
    ```

### switch / case

Switch/case serve para selecionar uma opção. Importante usar o comando `break` para que o código não rode infinitamente.

![Untitled](assets/Untitled%2016.png)

- Código de exemplo

    ```jsx
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
    ```

### Estruturas de repetição

Estruturas de repetição servem para realizar determinada operação até atingir determinada condição, sendo elas:

![Untitled](assets/Untitled%2017.png)

### For

Funciona como uma repetição até que a condição seja falsa:

![Untitled](assets/Untitled%2018.png)

- Código de exemplo

    ```jsx
    // for
    
    var array = [1, 2, 3, 4, 5];
    var objeto = {prop1: "val1", prop2: "val2", prop3: "val3"};
    
    // executa uma instrução até que seja falsa
    
    for (let indice = 0; indice < array.length; indice ++){
        console.log(indice);
    }
    ```

### For / in

Funciona como uma repetição a partir de uma propriedade.

![Untitled](assets/Untitled%2019.png)

- Código de exemplo

    ```jsx
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
    ```

### For/of

Funciona  como uma repetição a partir de um valor.

![Untitled](assets/Untitled%2020.png)

- Código de exemplo

    ```jsx
    // -------------------
    
    var array = [1, 2, 3, 4, 5];
    var objeto = {prop1: "val1", prop2: "val2", prop3: "val3"};
    
    // for/of
    
    for (i of array){ 
        console.log(i)
    }
    ```

> O for of não funciona com objetos, pois as propriedades variam, diferente de índices de array que sempre serão números inteiros.
>

Caso queiramos percorrer um objeto com for of, usamo:

![Untitled](assets/Untitled%2021.png)

- Código de exemplo

    ```jsx
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
    ```

### while

Executa a instrução enquanto a condição for verdadeira.

![Untitled](assets/Untitled%2022.png)

- Código de exemplo:

    ```jsx
    // ------------------
    
    // while
    var a = 0;
    while (a<10){
        console.log(a);
        a++;
    }
    ```

### do/while

Executa a instrução **até que** determinada condição seja falsa:

![Untitled](assets/Untitled%2023.png)

- Código de exemplo

    ```jsx
    // -----------------
    
    // do / while
    
    do{
        console.log(a)
        a++;
    }while(a<10);
    ```

## Funções e suas particularidades

### O que são funções?

Funções são blocos de comandos e instruções para execução de determinadas tarefas.

![Untitled](assets/Untitled%2024.png)

- Código de exemplo

    ```jsx
    function funcao (){
        console.log("Olá galera");
    }
    
    funcao();
    funcao();
    ```

### Como declarar

Para declarar funções em JavaScript, geralmente utilizamos a palavra reservada `function` seguida de parenteses `()` e chaves `{}` .

![Untitled](assets/Untitled%2025.png)

### Funções com parâmetros

Funções podem receber parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função.

![Untitled](assets/Untitled%2026.png)

- Exemplo de código

    ```jsx
    // --------------------------
    
    // Função com parâmetro
    function imprimeMensagem (mensagem){
        console.log(mensagem);
    }
    
    imprimeMensagem("Olá galerinha do pião");
    imprimeMensagem("Como estão?")
    ```

## Aprofundando em funções

Essa aula tem como objetivo aprofundar em funções, falando sobre:

- Tipos de funções;
- Criar uma calculadora somente com funções em javascript

### Função declarativa

São as funções que possuem o uso mais comum. Elas devem ser declaradas usando a palavra reservada `function` e em seguida o `nome da função`, parêntese `()` e então chaves `{}`.

Funções declarativas devem **obrigatoriamente ter o nome da função.**

![Untitled](assets/Untitled%2027.png)

- Código de exemplo

    ```jsx
    // Função declarativa
    
    function funcao() {
      console.log("Sou uma mensagem de função declarativa.");
    }
    
    funcao()
    ```

### Expressões de funções

Funções atribuídas à expressões. Nesse caso a nomeação da função é opcional.

![Untitled](assets/Untitled%2028.png)

- Código de exemplo

    ```jsx
    // Expressão de função
    
    var funcao = function funcao (){
      console.log("Sou uma mensagem de função de expressão nomeada");
    }
    
    funcao();
    
    var funcao = function (){
      console.log("Sou uma mensagem de função de expressão não nomeada");
    }
    
    funcao();
    ```

### Arrow Function

São **funções de expressão com sintaxe curta**. Sempre serão anônimas, ou seja, não devem ser nomeadas.

Para declarar uma arrow function devemos declarar com parênteses  `()` e em seguida adicionar `=>` e depois as chaves `{}`

![Untitled](assets/Untitled%2029.png)

- Código de exemplo

    ```jsx
    // Arrow function
    
    var funcao = () => { 
      console.log("Sou uma arrow function");
    }
    
    funcao();
    ```

### Criando uma calculadora

Para criar uma calculadora vamos utilizar apenas os métodos nativos de JavaScript, sendo eles:

![Untitled](assets/Untitled%2030.png)

- Código da calculadora:

    ```jsx
    // Calculadora com métodos nativos do JS
    
    function calculadora() {
      // Variável para receber a operação
      const operacao = Number(
        prompt(
          "Digite a operação: \n\n 1 - Soma (+) \n 2 - Subtração (-) \n 3 - Multiplicação (*) \n 4 - Divisão (/) \n 5 - Divisão inteira (%) \n 6 - Potenciação(**)"
        )
      );
    
      if (!operacao || operacao >= 7) {
        alert("Operação inválida");
        calculadora();
      } else {
        // Variáveis para armazenar valores e resultado
        let n1 = Number(prompt("Insira o 1º valor: "));
        let n2 = Number(prompt("Insira o 2º valor: "));
        let resultado;
    
        if (!n1 || !n2) {
          alert("Valores inválidos!");
          calculadora();
        } else {
          // Declarando funções de operação
          function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
          }
    
          function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
          }
    
          function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
          }
    
          function divisao() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
          }
    
          function divisaoInteira() {
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
            novaOperacao();
          }
    
          function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
            novaOperacao();
          }
    
          function novaOperacao() {
            let opcao = Number(
              prompt("Deseja realizar uma nova operação? \n 1 - Sim \n 2 - Não")
            );
    
            if (opcao == 1) {
              calculadora();
            } else if (opcao == 2) {
              alert("Obrigado por usar a nossa calculadora!");
            } else {
              alert("Digite uma opção válida");
              novaOperacao();
            }
          }
    
          // Selecionando a operação de acordo com valor digitado
          switch (parseInt(operacao)) {
            case 1:
              soma();
              break;
            case 2:
              subtracao();
              break;
            case 3:
              multiplicacao();
              break;
            case 4:
              divisao();
              break;
            case 5:
              divisaoInteira();
              break;
            case 6:
              potenciacao();
              break;
            default:
              alert("Operação inválida");
              calculadora();
          }
        }
      }
    }
    
    calculadora();
    ```

### Links e materiais adicionais

Repositório no GitHub: [https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript](https://github.com/DianaMartine/curso-dio-sintaxe-basica-javascript)
