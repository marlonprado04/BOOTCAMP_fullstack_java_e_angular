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
