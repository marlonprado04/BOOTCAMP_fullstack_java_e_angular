# Trabalhando com Web Components no Front-end

## Índice

- [Trabalhando com Web Components no Front-end](#trabalhando-com-web-components-no-front-end)
  - [Índice](#índice)
  - [Antes de começar](#antes-de-começar)
  - [O que vem por aí](#o-que-vem-por-aí)
  - [Bem-vindo](#bem-vindo)
  - [Com quem vou aprender essa jornada](#com-quem-vou-aprender-essa-jornada)
  - [Pré-requisitos](#pré-requisitos)
  - [A diferença entre Elements e Web Components](#a-diferença-entre-elements-e-web-components)
  - [O papel do HTML](#o-papel-do-html)
  - [O papel do CSS](#o-papel-do-css)
  - [Entendendo a DOM](#entendendo-a-dom)
  - [Entendendo a Shadow DOM](#entendendo-a-shadow-dom)
  - [Consultando o CAN I USE](#consultando-o-can-i-use)
  - [Definindo um Component](#definindo-um-component)
  - [Anatomia e vantagens de Components](#anatomia-e-vantagens-de-components)
  - [Estilizando um Component](#estilizando-um-component)
  - [Criando uma Prop](#criando-uma-prop)
  - [Construindo um Component de maneira profissional](#construindo-um-component-de-maneira-profissional)
  - [Setando Propriedades de classes](#setando-propriedades-de-classes)
  - [Construindo o build do seu component](#construindo-o-build-do-seu-component)
  - [Construindo as Props do card news](#construindo-as-props-do-card-news)
  - [Pegando as Props dos sub elementos do component](#pegando-as-props-dos-sub-elementos-do-component)
  - [Criando o Style do Seu component](#criando-o-style-do-seu-component)

## Antes de começar

- [x]  Criar pasta referente ao curso
- [x]  Adicionar link da pasta nos atributos do curso
- [x]  Adicionar arquivos e links adicionais ao repositório (pdf, pptx, etc)

## O que vem por aí

Esse curso vai nos apresentar frameworks para que a gente perca o medo de trabalhar com eles e nos sentir perdidos.

Durante o curso vamos começar com o básico da estrutura de criação de tag para entender conceitos mais complexos.

Vamos estudar ao longo desse curso o que são web components para aí entender como os frameworks funcionam.

## Bem-vindo

Os requisitos são ter uma noção de HTML, CSS e JavaScript para adentrar nos conceitos do curso.

## Com quem vou aprender essa jornada

O instrutor se chama Felipe Aguiar, ele é Tech Lead da DIO e trabalha há 8 anos nessa área.

## Pré-requisitos

Como pré-requisitos nós precisamos:

- Ter noções de HTML
- Ter noções de JavaScript
- Ter um editor de códigos (sugestão VSCode)
- Ter o nodeJS instalado

## A diferença entre Elements e Web Components

Por que ter web components? Web Components podem ser úteis para poupar tempo e energia na criação de sites.

Ele permite criar encapsulamentos na web, dessa forma não precisamos replicar código sempre que tiver necessidade.

Exemplo: site medium possui um template padrão para cada tópico e notícia composto por divs, spans, etc… Podemos encapsular todos esses elementos do html em uma tag única poupando tempo.

## O papel do HTML

Para início do código criamos o esqueleto com todas as estruturas, para parecer com as tag de informações do Medium:

![Untitled](Trabalhando%20com%20Web%20Components%20no%20Front-end%20a505154be5c44b91aa3ed05e7bec7ab8/Untitled.png)

O código personalizado até o momento:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOTÍCIAS INTERESTELARES</title>
</head>

<body>
    <div class="container">
        <div class="card">
            <div class="card__left">
                <span>Marlon Prado</span>
                <h1>ET Bilu está procurando professores</h1>
                <p>ET Bilu cansou de buscar conhecimento, agora ele procura quem ensine</p>
            </div>

            <div class="card__right">
                <img src="./assets/et_bilu.jpeg" alt="Et Bilu">
            </div>

        </div>
    </div>

</body>

</html>
```

## O papel do CSS

Durante essa aula criamos e manipulamos o CSS do código para deixar ele mais parecido com o objetivo.

Para isso usamos o site Box Shadow Generator para gerar a sombra no CSS de acordo com nossa vontade: [https://cssgenerator.org/box-shadow-css-generator.html](https://cssgenerator.org/box-shadow-css-generator.html)

O código CSS ficou conforme abaixo:

```css
* {
    /* Zerando todas as configurações aplicadas pelo navegador para que a gente crie as nossas */
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* Definindo fonte padrão */
    font-family: 'Segoe UI', sans-serif;
}

.card {
    width: 80%;
    /* Adicionando sombra à noticia*/
    box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.75);

    /* Borda para identificar a caixa*/
    border: 1px solid gray;

    /* Display flexivel para elementos internos, disponíveis em linha */
    display: flex;
    flex-direction: row;

    /* Adiciona espaço entre notícia e conteúdo */
    justify-content: space-between;
}

.card__left {
    /* Elementos flexiveis em coluna*/
    display: flex;
    flex-direction: column;

    /* Elementos flexiveis */
    justify-content: center;

    /* Adicionando espaço à esquerda da notícia*/
    padding-left: 10px;
}

.card__left>span {
    /* Peso da fonte do nome do autor */
    font-weight: 400;
}

/* Selecionando filho h1 direto do card */
.card__left>h1 {
    /* Margim do conteúdo */
    margin-top: 15px;
    /* Tamanho da fonte do título da notícia */
    font-size: 25px;

}

.card__left>p {
    /* Mudando cor do parágrafo da notícia */
    color: grey;
}
```

## Entendendo a DOM

A DOM (Document Object Model) é a estrutura que o navegador usa e fornece na hora de acessar aos sites.

Ela consiste em uma estrutura hierárquica em árvore que é composta pelas tags HTML aninhadas.

![Untitled](./assets/for_readme/Untitled%201.png)

Toda essa estrutura fica armazenada dentro do `document` no navegador. Acessando o console e escrevendo document conseguimos consultar isso.

## Entendendo a Shadow DOM

A Shadow DOM é um recurso que hoje em dia é disponibilizados pelos navegadores, onde é podemos criar uma árvore DOM personalizada a partir de algum elemento da tela.

Isso é útil pois a DOM padrão do arquivo quem tem controle é o navegador. Ao criar uma Shadow DOM quem tem o controle total dela somos nós.

**A Shadow DOM serve para encapsular os elementos. Podemos criar uma shadow DOM criando um custom element.**

## Consultando o CAN I USE

Existe um site chamado Can I Use que é muito utilizado pelos desenvolvedores frontend.

Nesse site ele demonstra a compatibilidade de funcionalidades com diversos elementos para saber se podem ser usados ou não.

Você pode encontrar este site nesse [link](https://caniuse.com/)

No site se consultarmos Shadow DOM podemos averiguar que é um recurso já compatível com a grande maioria dos navegadores disponíveis no mercado.

## Definindo um Component

Para criar um Component nós precisamos começar criando uma pasta chamada `src` para dentro dela criar outra chamada `Components` e dentro criar um arquivo chamado `CardNews.js` que será responsável pela criação do Component no HTML.

**Um ponto importante é que todo componente nada mais é do que uma função em JavaScript que vai acabar retornando um HTML, JavaScript e CSS.**

Dentro do arquivo criado nós inserimos o código abaixo:

```jsx
class CardNews extends HTMLElement {
  // Criando construtor da classe atual (CardNews)
  constructor() {
    // Chamando construtor da classe pai (HTMLElement)
    super();

    // Cria uma shadow dom (attachShadow) a partir dessa classe (this) 
    // no modo open, ou seja, ela pode manipular e ser manipulada pela DOM do navegador 
    const shadow = this.attachShadow({mode: "open"});
    
    // Incrementa no HTML uma tag h1 sempre que chamada
    shadow.innerHTML = "<h1>Hello World</h1>";
  }
}

//  Define um termo customizado para a tag, nesse caso, card-news
customElements.define("card-news", CardNews)
```

Nesse código nós criamos uma tag customizada que, ao importar o código JS no HTML, podemos usar como quisermos.

Exemplo de uso no nosso HTML:

```javascript
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NOTÍCIAS INTERESTELARES</title>
    <link rel="stylesheet" href="./styles/style.css">
    <script src="./src/Components/CardNews.js" defer></script>
</head>

<body>
    <div class="container">
        <div class="card">
            <div class="card__left">
                <span>Marlon Prado</span>
                <h1>ET Bilu está procurando professores</h1>
                <p>ET Bilu cansou de buscar conhecimento, agora ele procura quem ensine</p>
            </div>

            <div class="card__right">
                <img src="./assets/et_bilu.jpeg" alt="Et Bilu">
            </div>

        </div>
    </div>

    <!-- Tag personalizada sendo usada -->
    <card-news></card-news>
    <card-news></card-news>
    <card-news></card-news>
</body>

</html>
```

## Anatomia e vantagens de Components

Os components são compostos por elementos HTML, como já vimos.

Mas além de **elementos**, podemos adicionar à um componente um **CSS específico** que sirva somente para ele, uma **propriedade customizada** que pode ser passada ao chamar o componente durante o HTML.

A estrutura dos Components é similar ao desenho abaixo:

![Untitled](Trabalhando%20com%20Web%20Components%20no%20Front-end%20a505154be5c44b91aa3ed05e7bec7ab8/Untitled%202.png)

No exemplo, podemos chamar o component através do seu seletor `<card-comp>`

## Estilizando um Component

Nessa aula criamos outro arquivo dentro da pasta `Components`, dessa vez se chamando `TituloDinamico.js` .

Nesse arquivo criamos uma estrutura similar ao anterior, mas separando os passos de forma mais clara e transparente:

```jsx
class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Cria estrutura
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = "Marlon";

    // Estiliza componente
    const style = document.createElement("style");
    style.textContent = `
        h1{
            color: red;
        }
    `;

    // Adiciona à shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

// Atribui seletor
customElements.define("titulo-dinamico", TituloDinamico);
```

Se repararmos, além da estrutura de HTML, dessa vez incluímos um estilo para a shadow DOM.

Um detalhe é que ao adicionar essa tag customizada no HTML, aquele estilo inserido no component vale apenas para ele, ou seja, apesar de estar sendo inserido no código a cor vermelha para as tags H1, essa cor só será aplicada nas tags dentro dessa shadow DOM.

**Isso ocorre porque o estilo criado em shadows DOM’s são de escopo local, válidos apenas para a shadow DOM criada.**

## Criando uma Prop

Para criar uma propriedade e permitir que ela seja pega na hora de usar a tag no HTML, nós podemos usar o código:

`componentRoot.textContent = this.getAttribute("titulo");`

Dessa forma quando atribuirmos a propriedade titulo à tag personalizada, o valor passado nessa propriedade será colocado em tela.

Exemplo:

`<titulo-dinamico titulo="Oi amigos"></titulo-dinamico>`

Resultado:

![Untitled](Trabalhando%20com%20Web%20Components%20no%20Front-end%20a505154be5c44b91aa3ed05e7bec7ab8/Untitled%203.png)

## Construindo um Component de maneira profissional

Antes de começar a aula o professor reforça a necessidade de se ater à prorpiedade defer na inserção do script, pois ele especifica que o **script deve ser baixado e executado somente após o parsing da página HTML.**

Exemplo:

`<script src="./src/Components/CardNews.js" defer></script>`

Outro ponto mencionado durante a recriação do `CardNews.js` nesta aula é a importância de definir um nome com `-` na hora de nomear a tag, caso contrário o HTML recusa a criação da tag.

Exemplo:

`customElements.define("card-news", CardNews)`

Ao fim da aula o código ficou da seguinte forma, com uma estrutura mais profissional:

```javascript
class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria shadow de forma aberta
    const shadow = this.attachShadow({ mode: "open" });

    // Incrementa um h1 no HTML
    shadow.innerHTML = "<h1></h1>"

  }

 // Método para construir o HTML
    build(){

    }

    // Método para construir o CSS
    styles(){

    }
}

customElements.define("card-news", CardNews);
```

## Setando Propriedades de classes

Nessa aula nós começamos a criar a estrutura do CardNews.

Para isso nós:

- Criamos a raiz da shadow DOM
- Criamos os elementos filhos da div principal
- Settamos as classes de cada elemento
- Retornamos ao fim do método `build` o elemento raiz

O código está assim até o momento:

```javascript
class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria shadow de forma aberta
    const shadow = this.attachShadow({ mode: "open" });

    // Pendurando filhos na shadow DOM de acordo com métodos
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Método para construir o HTML
  build() {
    // Constrói elemento pai (raiz do esqueleto)
    const componentRoot = document.createElement("div");
    // Setta atributo class=card ao elemento pai
    componentRoot.setAttribute("class", "card");

    // Constrói elementos filhos e suas classes
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card___left");
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    // Adiciona filhos à estrutura 
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    // Retorna elemento pai e por consequência seus filhos
    return componentRoot;
  }

  // Método para construir o CSS
  styles() {}
}

customElements.define("card-news", CardNews);
```

## Construindo o build do seu component

Nessa aula finalizamos a construção da estrutura do nosso CardNews, adicionando todos os filhos corretamente.

Código final:

```jsx
class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria shadow de forma aberta
    const shadow = this.attachShadow({ mode: "open" });

    // Pendurando filhos na shadow DOM de acordo com métodos
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Método para construir o HTML
  build() {
    // Constrói elemento pai (raiz do esqueleto)
    const componentRoot = document.createElement("div");
    // Setta atributo class=card ao elemento pai
    componentRoot.setAttribute("class", "card");

    // Constrói elementos filhos e suas classes
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card___left");
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    const linkTitle = document.createElement("a");
    const newsContent = document.createElement("p");

    const newsImage = document.createElement("img");

    // Adiciona filhos à estrutura 
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
  
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    cardRight.appendChild(newsImage);

    // Retorna elemento pai e por consequência seus filhos
    return componentRoot;
  }

  // Método para construir o CSS
  styles() {}
}

customElements.define("card-news", CardNews);
```

## Construindo as Props do card news

Nessa aula começamos a adicionar as propriedades ao CardNews.

Para isso, incluímos linhas como

`autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");`

E no HTML:

```html
<card-news
        autor="Tirulipa"
        title="Tirulipa disse que quem cuchicha o rabo espicha"
        content="Já dizia mamãezinha: quem cutuca o rabo encurta, quem cuchicha o rabo espicha"
    ></card-news>
```

O código ficou:

```jsx
class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria shadow de forma aberta
    const shadow = this.attachShadow({ mode: "open" });

    // Pendurando filhos na shadow DOM de acordo com métodos
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Método para construir o HTML
  build() {
    // Constrói elemento pai (raiz do esqueleto)
    const componentRoot = document.createElement("div");
    // Setta atributo class=card ao elemento pai
    componentRoot.setAttribute("class", "card");

    // Constrói elementos filhos e suas classes
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card___left");
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    // Define propriedade do nome do autor
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    const newsImage = document.createElement("img");

    // Adiciona filhos à estrutura 
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
  
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    cardRight.appendChild(newsImage);

    // Retorna elemento pai e por consequência seus filhos
    return componentRoot;
  }

  // Método para construir o CSS
  styles() {}
}

customElements.define("card-news", CardNews);
```

## Pegando as Props dos sub elementos do component

Nessa aula o professor demonstrou como atribuir valores às propriedades já existentes do HTML.

É simples da mesma forma que adicionar propriedades novas, por exemplo, podemos adicionar `.href` ao invés de `.textContent` para passar de um atributo criado para um existente:

```jsx
const linkTitle = document.createElement("a");
linkTitle.textContent = this.getAttribute("title");
// Adiciona propriedade de href dinâmica
linkTitle.href = this.getAttribute("link-url");
```

Dessa forma o código fica:

```jsx
class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria shadow de forma aberta
    const shadow = this.attachShadow({ mode: "open" });

    // Pendurando filhos na shadow DOM de acordo com métodos
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Método para construir o HTML
  build() {
    // Constrói elemento pai (raiz do esqueleto)
    const componentRoot = document.createElement("div");
    // Setta atributo class=card ao elemento pai
    componentRoot.setAttribute("class", "card");

    // Constrói elementos filhos e suas classes
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card___left");
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    // Define propriedade do nome do autor
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    // Adiciona propriedade de href dinâmica
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content")

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo");

    // Adiciona filhos à estrutura 
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);
  
    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    cardRight.appendChild(newsImage);

    // Retorna elemento pai e por consequência seus filhos
    return componentRoot;
  }

  // Método para construir o CSS
  styles() {}
}

customElements.define("card-news", CardNews);
```

## Criando o Style do Seu component

Nessa aula apenas copiamos e colamos o CSS para dentro do styles.

Dessa forma o shadow DOM importou o style adicionado para funcionar com o componente.

Abaixo o código finalizado:

```jsx
class CardNews extends HTMLElement {
  constructor() {
    super();

    // Cria shadow de forma aberta
    const shadow = this.attachShadow({ mode: "open" });

    // Pendurando filhos na shadow DOM de acordo com métodos
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  // Método para construir o HTML
  build() {
    // Constrói elemento pai (raiz do esqueleto)
    const componentRoot = document.createElement("div");
    // Setta atributo class=card ao elemento pai
    componentRoot.setAttribute("class", "card");

    // Constrói elementos filhos e suas classes
    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card__left");
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card__right");

    const autor = document.createElement("span");
    // Define propriedade do nome do autor
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    // Adiciona propriedade de href dinâmica
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    const newsImage = document.createElement("img");
    newsImage.src = this.getAttribute("photo");

    // Adiciona filhos à estrutura
    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    cardRight.appendChild(newsImage);

    // Retorna elemento pai e por consequência seus filhos
    return componentRoot;
  }

  // Método para construir o CSS
  styles() {
    const style = document.createElement("style");
    style.textContent = `
        * {
        /* Zerando todas as configurações aplicadas pelo navegador para que a gente crie as nossas */
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* Definindo fonte padrão */
        font-family: 'Segoe UI', sans-serif;
    }

    .card {
        width: 80%;
        /* Adicionando sombra à noticia*/
        box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.75);
        -webkit-box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 8px 10px 27px -1px rgba(0, 0, 0, 0.75);

        /* Borda para identificar a caixa*/
        border: 1px solid gray;

        /* Display flexivel para elementos internos, disponíveis em linha */
        display: flex;
        flex-direction: row;

        /* Adiciona espaço entre notícia e conteúdo */
        justify-content: space-between;
    }

    .card__left {
        /* Elementos flexiveis em coluna*/
        display: flex;
        flex-direction: column;

        /* Elementos flexiveis */
        justify-content: center;

        /* Adicionando espaço à esquerda da notícia*/
        padding-left: 10px;
    }

    .card__left>span {
        /* Peso da fonte do nome do autor */
        font-weight: 400;
    }

    /* Selecionando filho h1 direto do card */
    .card__left>a {
        /* Margim do conteúdo */
        margin-top: 15px;
        /* Tamanho da fonte do título da notícia */
        font-size: 25px;

    }

    .card__left>p {
        /* Mudando cor do parágrafo da notícia */
        color: grey;
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews);
```
