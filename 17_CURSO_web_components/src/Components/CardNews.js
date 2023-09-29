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
