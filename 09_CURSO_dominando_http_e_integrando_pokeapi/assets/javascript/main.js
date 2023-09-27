const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 5;
let offset = 0;
let maxRecord = 151;

function loadMoreItems(offset, limit) {
  // Chamando requisição de API e listando pokemon no browse
  pokeApi
    .getPokemons(offset, limit)
    .then((pokemons = []) => {
      // Primeiro mapeia todos os pokemons e os converte em li de HTML via MAP e convertPokemonToLi
      // Depois unifica tudo em uma string sem separador via JOIN
      // Depois incrementa lista convertida em string no html via innerHTML
      const newHtml = pokemons
        .map((pokemon) => {
          return `<li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}"> ${type}</li>`
                          )
                          .join("")}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>

            </li>`;
        })
        .join("");
      pokemonList.innerHTML += newHtml;
    })
    // Retorna erro caso promise dê errado
    .catch((erro) => console.log(erro));
}

// Carrega primeiros pokemons na tela
loadMoreItems(offset, limit);

// Ao clicar carrega mais pokemons de acordo com o limite estabelecido
loadMoreButton.addEventListener("click", () => {
  // Atribui ao numero de novos elementos o valor somado ao limite atual
  offset += limit;

  // Armazena o número de itens da próxima página
  const qtdRecordsWithNextPage = offset + limit;

  // Verifica se a próxima página passa do limite estabelecido
  if (qtdRecordsWithNextPage >= maxRecord) {
    // Se passar, cria novo limite com a diferença do limite estabelecido e
    // o número de elementos atual
    const newLimit = maxRecord - offset;

    // Carrega mais itens de acordo com o novo limite
    loadMoreItems(offset, newLimit);

    // Remove botão da tela
    loadMoreButton.parentElement.removeChild(loadMoreButton);
  } else {
    // Se não passar, carrega mais itens de acordo com os valores calculados
    loadMoreItems(offset, limit);
  }
});
