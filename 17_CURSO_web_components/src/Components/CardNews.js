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
