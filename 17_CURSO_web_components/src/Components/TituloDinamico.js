class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // Cria estrutura
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute("titulo");

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
