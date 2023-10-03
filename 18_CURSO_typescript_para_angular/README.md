# TypeScript para Angular

## Índice

- [TypeScript para Angular](#typescript-para-angular)
  - [Índice](#índice)
  - [Antes de começar](#antes-de-começar)
  - [O que vem por aí?](#o-que-vem-por-aí)
  - [O que é e porque você deveria utilizar Typescript?](#o-que-é-e-porque-você-deveria-utilizar-typescript)
  - [Vendo na prática a maior vantagem do TypeScript](#vendo-na-prática-a-maior-vantagem-do-typescript)
  - [Instalando o TypeScript localmente](#instalando-o-typescript-localmente)
  - [Como rodar o código TypeScript](#como-rodar-o-código-typescript)
  - [Criando e configurando o arquivo TSConfig](#criando-e-configurando-o-arquivo-tsconfig)
  - [Criando um script de execução](#criando-um-script-de-execução)
  - [Trabalhando com tipos de variáveis](#trabalhando-com-tipos-de-variáveis)
  - [Trabalhando com Objects](#trabalhando-com-objects)
  - [Trabalhando com arrays](#trabalhando-com-arrays)
  - [Trabalhando com arrays de MultiTypes](#trabalhando-com-arrays-de-multitypes)
  - [Trabalhando com tuplas](#trabalhando-com-tuplas)
  - [Reaproveitando conhecimentos de JavaScript](#reaproveitando-conhecimentos-de-javascript)
  - [Trabalhando com Dates](#trabalhando-com-dates)
  - [Funções](#funções)
  - [Funções multi tipos](#funções-multi-tipos)
  - [Funções async](#funções-async)
  - [Interfaces e comparação com o type](#interfaces-e-comparação-com-o-type)
  - [Quando usar interfaces](#quando-usar-interfaces)
  - [Como o JS lida com interfaces ou types](#como-o-js-lida-com-interfaces-ou-types)
  - [Trabalhando com Classes](#trabalhando-com-classes)
  - [Data Modifiers](#data-modifiers)
  - [O que influencia nas classes](#o-que-influencia-nas-classes)
  - [SubClasses](#subclasses)
  - [O problema que o Generics resolve](#o-problema-que-o-generics-resolve)
  - [Utilizando Generics na prática](#utilizando-generics-na-prática)
  - [Trabalhando com TS Node Dev](#trabalhando-com-ts-node-dev)
  - [O Princípio dos decorators](#o-princípio-dos-decorators)
  - [Class decorators](#class-decorators)
  - [Attribute Decorator](#attribute-decorator)
  - [Conclusão](#conclusão)

## Antes de começar

- [x]  Criar pasta referente ao curso
- [x]  Adicionar link da pasta nos atributos do curso
- [x]  Adicionar arquivos e links adicionais ao repositório (pdf, pptx, etc)

## O que vem por aí?

O TypeScript serve para tipar o JavaScript e ele serve também para adicionar alguns recursos no JavaScript que permitem trabalhar com mais segurança.

Se formos usar Angular, precisaremos usar TypeScript, pois o Angular se baseia em TypeScript.

Nesse curso vamos ver o TypeScript puro para entender as vantagens e aprender a usá-lo para então migrar pro Angular.

## O que é e porque você deveria utilizar Typescript?

Se pesquisarmos agora ou perguntarmos para alguém o que é o TypeScript, a resposta padrão será que **o TypeScript é um superset para o JavaScript**.

Superset pode ser visto como uma analogia simples: o Homem de Ferro com armadura é o superset do Tony Stark, pois ele amplia as potências do Tony.

![Untitled](./assets/for_readme/Untitled.png)

Alguns recursos que o TypeScript incrementa no JavaScript:

- Tipar as variáveis para evitar falhas e inconsistências de código;
- Aprimorar recursos das classes em JavaScript
- Permite criar interfaces e com isso suas heranças
- Permite criar enums de uma forma mais fácil
- Permite ver os erros durante o desenvolvimento, pois TypeScript não é interpretado e sim compilado

Podemos usar TypeScript em qualquer lugar que usaríamos JavaScript, pois o código é **transpilado**, ou seja, ele traduz e compila para que funcione em JavaScript.

![Untitled](./assets/for_readme/Untitled%201.png)

Quem faz a interpretação e tradução de TypeScript é o Node.

## Vendo na prática a maior vantagem do TypeScript

Um exemplo de problema que o JavaScript possui é o não apontamento de erro.

No código abaixo temos uma função que interage com o objeto heroi e tenta ligar para ele, pegando a informação de telefone dentro do objeto.

![Untitled](./assets/for_readme/Untitled%202.png)

Ao executar o código, nesse caso, o programa executa sem problemas:

![Untitled](./assets/for_readme/Untitled%203.png)

Mas se removermos a propriedade telefone do objeto, o JavaScript passa normalmente tentando ligar para algo indefinido:

![Untitled](./assets/for_readme/Untitled%204.png)

Mas em TypeScript, precisamos definir um objeto e o tipo de cada propriedade, além de na hora de passar a função especificamos o tipo de valor que deve ser passado na chamada dela:

![Untitled](./assets/for_readme/Untitled%205.png)

Ao executar o código com as informação, ele roda normalmente. Mas ao tentar remover alguma informação estipulada na criação do objeto, o código além de apontar o erro durante o tempo de execução aponta um erro durante o tempo de desenvolvimento:

![Untitled](./assets/for_readme/Untitled%206.png)

## Instalando o TypeScript localmente

No site oficial existe a opção de download e existem duas formas de baixar sendo de forma global no sistema ou como dependência de algum projeto.

A segunda opção permite trabalhar com versões diferentes do TypeScript para cada projeto e é ela que vamos utilizar no curso.

Para início, precisamos criar um projeto do tipo node. E pra isso devemos usar o comando `npm init -y`  dentro da pasta do projeto.

Esse comando vai criar um arquivo chamado `package.json` que contém as informações do projeto,

Após isso, usamos o comando `npm install typescript -D` onde o parâmetro `-D`  serve para informar que o TypeScript será instalado em desenvolvimento (deploy), ou seja, ele instalará de forma que o TypeScript será usado apenas durante o tempo de desenvolvimento.

Se abrirmos o arquivo `package.json` agora veremos que ele conterá a linha `devDependencies` demonstrando o TypeScript instalado como dependência de desenvolvimento:

```json
{
  "name": "18_curso_typescript_para_angular",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.2.2"
  }
}
```

Após isso podemos criar o arquivo `index.ts` para iniciar o projeto em si.

## Como rodar o código TypeScript

O Node é uma plataforma para executar códigos JavaScript, então se o node funciona com JS também funciona com TS por serem a mesma coisa.

Se executarmos um código TS com as mesmas linhas que um JavaScript entende (ex: `console.log("ola mundo")` ) o node vai executar.

Mas ao tentar usar recursos entendidos somente por TS, o node não executa.

Exemplo, o código abaixo dá erro:

```tsx
type hero={ 
    name: string;
    vulgo: string;
}

console.log("Ola mundo");
```

Para isso precismos usar o comando npx tsc com o caminho do arquivo. O tsc significa TypeScript Compiler.

Quando passamos esse comando, o código roda sem problemas, pois ele traduz o código TypeScript em JavaScript, criando dois arquivos iguais na pasta, mas em extensões diferentes.

## Criando e configurando o arquivo TSConfig

Para rodar o código TypeScript podemos usar o comando `npx tsc <caminho_do_arquivo>`, mas dessa forma sempre que tivermos um código TypeScript pode dar erro de ambiente, já que o interpretador compila em um código JS, dessa forma pode apontar erro de duplicidade. Além disso, precisamos usar o comando várias vezes para compilar os arquivos criados, o que acaba sendo pouco prático.

**OBS: A sigla npx significa Node Package Execute assim como npm significa Node Package Manager.**

Para resolver esse problema de contexto e de conversão de arquivos nós podemos converter em massa todos arquivos dentro de `src`

Para isso podemos **criar um arquivo de configuração do TypeScript** com o comando `npx tsc --init` na raiz do projeto. Esse comando vai criar um arquivo chamado `tsconfig.json` na raiz do projeto.

Esse arquivo é responsável pela configuração de como o TypeScript deve se comportar no projeto. Dentro do site do TypeScript existe uma referência de customizações possíveis para esse tsconfig.

Abaixo as principais:

- Podemos  mudar a versão do ECMA Script no “target”
- Podemos mudar a pasta raiz de códigos TypeScript no “rootDir”, podemos apontar para `src`
- Podemos mudar a pasta de saída no “outDir”, podemos mudar para a pasta `build`

Após essas alterações podemos usar o comando `npx tsc` para compilar todos os arquivos da pasta src automaticamente e passa o arquivo js para a pasta build, já que o comando consulta o TSConfig antes de compilar.

## Criando um script de execução

No momento nós precisamos compilar o código TS e depois usar o comando `node` para executar ele. Mas podemos deixar isso mais dinâmico, usando um único comando.

Para fazer isso, precisamos adicionar um script no arquivo `package.json` .

O arquivo estava da seguinte forma:

```json
{
  "name": "18_curso_typescript_para_angular",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "npx tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.2.2"
  }
}
```

Vamos adicionar a linha `"start": "npx tsc && node build ./src/index.js"` dentro da linha `scripts` para que o arquivo fique:

```json
{
  "name": "18_curso_typescript_para_angular",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "tsc && node build/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^5.2.2"
  }
}
```

Dessa forma, ao usar o comando `npm run start` o esse script será executado.

## Trabalhando com tipos de variáveis

Nessa aula vimos os tipos de variáveis em TS.

Abaixo o código de resumo:

```tsx
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
```

## Trabalhando com Objects

Para criar objetos em TS podemos criar um tipo especificado, permitindo previsibilidade de dados.

A maneira mais recomendada de criar um objeto é criá-lo de forma shapada para permitir a previsibilidade.

Abaixo um exemplo de código:

```tsx
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
```

## Trabalhando com arrays

Para criar arrays em typescript podemos usar as duas formas abaixo:

```tsx
//---------------------------------------------------------
// Tipo array

// Existem duas formas de criar arrays, mas que na prática são a mesma coisa

let dados: string[] = ["Marlon", "Ana", "Loren"]
let dados2: Array<string> = ["Marlon", "Ana", "Loren"]

// A primeira forma parece mais legível, talvez seja a melhor para uso
```

## Trabalhando com arrays de MultiTypes

O TS permite criar arrays com multi tipos, conforme abaixo:

```tsx
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
```

## Trabalhando com tuplas

Tuplas são vetores de multi types, porém nela existe um lugar certo para cada coisa.

Para criar tuplas em TS:

```tsx
//---------------------------------------------------------

// Tuplas
// Em tuplas nós abrimos o colchetes diretao, sem passar o tipo antes

let boleto:[string, number, number] = ["conta de agua", 120.00, 13145125125454]

// Se tentar inverter a ordem estipulada o TS aponta erro
```

Ela pode ser útil para de repente trazer alguma informação de um banco de dados em determinada ordem, sem precisar criar uma função e etc.

## Reaproveitando conhecimentos de JavaScript

O TS permite aproveitar vários conhecimentos trazidos de JS.
Por exemplo, os arrays em TS possuem as mesmas funções já existentes em JS:

```tsx
//---------------------------------------------------------

// O TS aproveita os métodos do JS para, por exemplo, os arrays

dados.push("Olá");
dados.map((dado) => console.log(dado));
```

## Trabalhando com Dates

Existe também o tipo `Dates` que é uma interface para armazenar dados do tipo data no formato americano:

```tsx
//---------------------------------------------------------

// Dates

// Dates são do interfaces do tipo data e seguem o formato americano na sua criação

let aniversario:Date = new Date("2000-01-10 03:40")

console.log(aniversario.toString())
```

## Funções

As funções em TS possuem apenas uma diferença em relação ao JS.

Elas permitem passar o tipo de dados que recebem e o tipo de dados de retorno.

Caso tentemos atribuir o valor de retorno de uma função à uma variável, essa variável precisa ter o mesmo tipo de retorno da função.

```tsx
// Functions em TS não são tão diferentes de JS

// Mas em TS, podemos tipar os atributos e a saída
function addNumber(x:number, y:number): number{
    return x + y;
}

// Se formos associar essa função à uma variável, a variável precisa ser do tipo da saída da função
let soma : number = addNumber(4, 5);

console.log(soma);
```

## Funções multi tipos

Funções em TS permitem receber mais de um tipo e retornar mais de um tipo.

Podemos definir isso da seguinte forma:

```tsx
// ----------------------------

// Funções multi tipos

// Em typescript também podemos adicionar um "or" no tipo

function CallToPhone(phone: number | string): number | string {
    return phone;
}

console.log(CallToPhone("11121"), CallToPhone(131313));
```

## Funções async

Funções async precisam ter como retorno promises com o tipo de acordo com o retorno da função.

Exemplo:

```tsx
// ----------------------------

// async

// Funções async retornam promises, precisamos tipar o retorno da função de acordo

async function getDatabase(id: number): Promise<string>{
    return "Marlon";
}
```

## Interfaces e comparação com o type

Interfaces são muito parecidas com o `type` onde criamos um tipo próprio.

```tsx
//Interfaces são como types

// Criando tipo robot
type robot ={ 
    name:string;
    id:number;
}

// Criando um robo usando o type
let robo: robot = { 
    name:"Megamen",
    id:1
}

// Criando uma interface robot
interface robot2 {
    id: number;
    name:string;
}

// Criando um robo a partir da interface
let robo2: robot2 = {
    id:1,
    name:"Pluto"
}
```

A principal diferença entre o `type` e `interface` ?

O Type é utilizado quando queremos propriamente tipar as coisas, mas interfaces usamos para quando formos trabalhar com classes.

Algumas observações que servem tanto para types quanto interfaces:

- Podemos passar propriedades com multi tipos;
- Podemos passar propriedades com `readoonly` , onde a propriedade só poderá ser visualizada, sem ser modificada posteriormente

```tsx
type robot ={ 
    readonly name: string | number;
    id:number;
}

// Criando um robo usando o type
let robo: robot = { 
    name:"Megamen",
    id:1
}

console.log((robo.id = 2)) // retorna erro ao tentar modificar
```

## Quando usar interfaces

Se vamos definir a forma como uma estrutura vai receber seus valores, o melhor é tipar ele com o `type`

Se estivermos falando de classes (entender classe como um molde) que implementam novos recursos, então o melhor é criar uma `interface`

Uma ideia que ajuda é entender as interfaces como contratos a serem seguidos.

Se criarmos uma interface, a classe que for implementar ela ou estendê-la, deve seguir este contrato.

No código abaixo estamos criando uma interface do tipo `robot` que exige a criação da propriedade `id` e `name` além do método `sayHello`

```tsx
// Criando uma interface robot
interface robot2 {
    id: number;
    name: string;
    sayHello(): string;
}
```

Dessa forma, ao criar uma classe `Pessoa` que implementa o a interface `robot2` precisamos ter as informações exigidas pela interface. No exemplo abaixo fizemos isso, implementando o método construtor da classe para exigir a atribuição do `id` e `nome`:

```tsx
// Criando classe pessoa a partir da interface robot2
class Pessoa implements robot2 {
    id: number;
    name: string;

    // Criando método construtor da classe pessoa
    constructor(id:number, name:string){
        this.name = name;
        this.id = id;
    }

    // Criando método exigido pela interface
    sayHello(): string {
        return `Hello ${this.name}`
    }

}

```

Após isso, podemos criar uma nova pessoa passando alguns atributos e depois usar o método `sayHello` que foi herdado da interface para imprimir na tela a mensagem de hello:

```tsx
// Criando pessoa nova
const p = new Pessoa(1, "Marlon");
console.log(p.sayHello());
```

## Como o JS lida com interfaces ou types

Um detalhe interessante é entender como o JS lida com os `types` e `interfaces` criados em TS.

No JS, os valores são convertidos em objetos, então na prática o que o TS faz é deixar o código mais legível e semântico para nossa edição, nos poupando código e energia para interpretar as informações:

Em typescript:

![Untitled](./assets/for_readme/Untitled%207.png)

Em javascript:

![Untitled](./assets/for_readme/Untitled%208.png)

## Trabalhando com Classes

Classes servem como receitas para criação de objetos.

Por exemplo, podemos criar uma classe para criação de um personagem de jogo, onde ao criar um novo personagem precisamos passar alguns valores previamente definidos:

```tsx
// Classes

class Character {
    name: string;
    stregth: number;
    skill: number;

    // Passing age as optional information
    age?:number

    // Constructor for create a class
    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    // Method to attack
    attack(): void {
        console.log(`Attack with ${this.stregth} points!`);
    }
}

// Create new character
const c1 = new Character("Marlon", 10, 4);

// Print character informations
console.log(c1);

// Print character attack
c1.attack();
```

## Data Modifiers

Já que estamos falando de classes, precisamos falar de `modificadores de acesso` ou Data Modifiers.

Existem 3 modificadores de acesso:

- public
- private
- protected

Quando usamos o `private` , o conteúdo em private só pode ser acessado dentro da própria classe. Ou seja, não conseguimos passar novos valores para a propriedade privada de fora da classe ou mesmo acessá-los para consulta:

```tsx
// Classes

// Data Modifiers

class Character {
    private name: string;
    stregth: number;
    skill: number;

    // Passing age as optional information
    age?:number

    // Constructor for create a class
    constructor(name: string, stregth: number, skill: number){
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    // Method to attack
    attack(): void {
        console.log(`Attack with ${this.stregth} points!`);
    }
}

// Create new character
const c1 = new Character("Marlon", 10, 4);

// Print character informations
console.log(c1);

// Print character attack
c1.attack();

// Try acess private property

c1.name; // This doesnt work

```

Ao não definir o tipo de modificador de acesso, por padrão ele será `público` , ou seja, os demais atributos do exemplo acima podem ser acessados globalmente, de fora da classe.

O outro modificador é o `protected` permite que tanto a classe  original quanto as subclasses que herdarem a classe original possam acessar os atributos.

## O que influencia nas classes

Os data modifiers também são aplicáveis nos métodos da classe.

Com isso, temos o compilado de informações referentes às classes, onde:

- Podemos colocar um atributo como `readonly` para permitir somente a leitura
- Podemos passar um `?` ao final do nome do atributo para que ele seja opcional (ex: `name?: string` )
- Podemos colocar um `data modifier` para controlar o acesso de métodos e atributos da classe

## SubClasses

Subclasses herdam os atributos e métodos da classe pai, desde que estejam como protected ou public.

Abaixo um exemplo de código:

```tsx
// Classes

class Character {
    private name: string;
    protected stregth: number;
    skill: number;

    // Passing age as optional information
    age?: number

    // Constructor for create a class
    constructor(name: string, stregth: number, skill: number) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }

    // Method to attack
    attack(): void {
        console.log(`Attack with ${this.stregth} points!`);
    }
}

// Create new character
const c1 = new Character("Marlon", 10, 4);

// Print character informations
console.log(c1);

// Print character attack
c1.attack();

//----------------------------------------------
// Subclass
// On creation of subclass:
// Character: superclass
// Magician: subclass
class Magician extends Character {
    // Add new attribute
    magicPoints: number;

    constructor(name: string, stregth: number, skill: number, magicPoints: number) {
        // Calling super to invoke the parent class's constructor and pass values 
        super(name, stregth, skill);

        // Pass magicpoint to attribute of class
        this.magicPoints = magicPoints;

        // Trying acess parents class attributes according with data modifiers
        this.name; // Dont work because is private
        this.stregth // Its work because is protected
        this.skill // Its work because is protected
    }
}

// Create new character magician
const c2 = new Magician("Gandalf", 110, 60, 80);
```

## O problema que o Generics resolve

O generic types funciona como no mundo real quando vamos comprar um medicamento.

Nós desejamos um determinado medicamento para uma função específica, mas aceitamos opções genéricas que resolvam o problema.

Abaixo um exemplo de código onde podemos usar o generic, pois ao criar um array any ele permite receber todo tipo de informação mesmo que depois tenhamos determinado que ele é um array de numeros:

```tsx
// Generics

// Create function to receive and concatenate any types of array and return any types of array
function concatArray(...itens:any[]): any[]{
    return new Array().concat(...itens);
}

// Create new arrays to string and number
const numArray = concatArray([1,5], [3]);
const stringArray = concatArray(["Marlon", "João"], ["Goku"]);

// Print created arrays
console.log(numArray);
console.log(stringArray);

// This code has a problema:
// When creating an array of number, it allows incrementing with string
numArray.push("Marlon");
```

## Utilizando Generics na prática

Para criar algo genérico podemos colocar, por exemplo, a letra T maiúscula entre o símbolo de menor e maior que logo após o nome da função. Por exemplo `function concatenate<T>`

Dessa forma o código permite um dinamismo na hora de criar o array, mas bloqueia a quebra das regras estipuladas no uso da função:

```tsx
// Generics

// Create function to receive and concatenate generic array information and return a generic array information
// T on uppercase represents a generic information
function concatArray<T>(...itens:T[]): T[]{
    return new Array().concat(...itens);
}

// Create new arrays to string and number
const numArray = concatArray<number[]>([1,5], [3]);
const stringArray = concatArray<string[]>(["Marlon", "João"], ["Goku"]);

// Print created arrays
console.log(numArray);
console.log(stringArray);

// When creating an array of number, it not allow incrementing with string, because was delimited of generics
// numArray.push("Marlon");
```

## Trabalhando com TS Node Dev

Para evitar a transpilação do código TS toda vez que fizermos alterações, existe uma dependência de node que permite automatizar essa tarefa, o `ts-node-dev` que é um servidor local que entende typescript.

Para configurar ela, precisamos baixá-la primeiro.

Como estamos instalando as dependências localmente em nosso código, vamos usar o parâmetro `-D` novamente, então na pasta do projeto digitamos:

`npm install ts-node-dev -D`

Após isso, o arquivo package.json terá incluído o `ts-node-dev` como uma dependência do projeto.

Agora precisamos configurar o script, adicionando a linha abaixo na seção de scripts do `package.json`:

`"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",`

Esse script executa o ts-node-dev em modo `--respawn` , o que significa que ele fica em loop realizando a execução do código sempre que houver alterações. Ele também `--transpile-only` , ou seja, faz a transpilação do código sem criar a build em JavaScript.

Isso é útil para poupar ainda mais tempo de desenvolvimento.

## O Princípio dos decorators

Uma analogia para os decorator é, por exemplo, uma ação que você executa de forma automática por estar sempre sendo lembrado, como comprar leite no caso dele estar abaixo de 3 reais, já que sua mãe te lembra disso sempre.

Para usarmos os decorators precisamos antes habilitar a função que está comentada dentro do `tsconfig.json`.

Os decorator são usados com um símbolo de @ para identificá-los.

Como ele serve para decorar uma operação, podemos usar ele para, por exemplo, printar a classe, basta colocar acima da declaração da classe:

```tsx
// decorators

function ExibirNome(target:any){
    console.log(target);
}

@ExibirNome
class Funcionario{
}
```

## Class decorators

Vamos pensar em algo mais útil.

Vamos pensar que você está criando um código com várias APIs e precisa exibir a versão delas.

Como decorator é um recurso experimental, ao buildar o código em JS haverá um retorno de erro.

Para poder executar o recurso temos que usar o ts-node-dev que executa o código na memória.

Abaixo um exemplo de decorator que injet a versão da API dinamicamente em sua criação:

```tsx
// decorators

// Injeta a versão da API dinâmicamente quando chamado
function apiVersion (version: string){
    return (target: any) => { 
        Object.assign(target.prototype, {__version: version})
    }
}

// Chamando decorator acima da classe Api
@apiVersion("1.10")
class Api{}

// Criando nova API
const api = new Api();

// Imprimindo propriedade injetada via decorator
console.log(api.__version);
```

## Attribute Decorator

Attribute Decorator permite definir critérios para atributos.

Por exemplo, se você estiver em um time desenvolvendo diversas apis e gostaria de restringir a criação de nomes para as APIs, exigindo que elas não possuam um nome curto.

Visando isso, podemos criar um Attribute Decorator `minLength`  que faz a verificação de acordo:

```tsx
// decorators

// Função decorator minLength que verifica o comprimento mínimo da propriedade
function minLength(length: number) {
    return (target: any, key: string) => {
        // Armazena o valor original da propriedade em _value
        let _value = target[key];

        // Define um getter personalizado que retorna o valor armazenado em _value
        const getter = () => _value;

        // Define um setter personalizado que verifica o comprimento mínimo
        const setter = (value: string) => {
            if (value.length < length) {
                // Lança um erro se o comprimento do valor for menor que o especificado
                throw new Error(`Tamanho menor do que ${length}.`);
            } else {
                // Caso contrário, atualiza o valor em _value
                _value = value;
            };
        };

        // Substitui a definição da propriedade original com getter e setter personalizados
        Object.defineProperty(target, key, {
            get: getter,
            set: setter
        });
    };
};

// Aplicando o decorator apiVersion à classe Api
class Api {
    // Aplicando o decorator minLength à propriedade name da classe Api
    @minLength(3)
    name: string;

    constructor(name: string) {
        // Inicializa a propriedade name com o valor passado no construtor
        this.name = name;
    }
}

// Criando nova API
const api = new Api("Produtos");

console.log(api.name);
```

## Conclusão

nesse curso vimos alguns princípios sobre o TS que serão uteis para diversos frameworks como o Angular e o React.

Em vista disso, o conteúdo original do curso pode ser visitado no repositório do GitHub através [deste link](https://github.com/felipeAguiarCode/angular-playground/tree/main/C2%20-%20Typescript%20para%20Angular)
