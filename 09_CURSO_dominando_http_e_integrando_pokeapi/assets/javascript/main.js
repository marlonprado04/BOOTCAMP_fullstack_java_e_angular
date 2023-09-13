const pokemonList = document.getElementById("pokemonList");
console.log(pokemonList);

// Função para converter resultado de API para lista do HTML
function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        alt="${pokemon}">
                </div>

            </li>`;
}

// Chamando requisição de API e listando pokemon no browse
pokeApi
  .getPokemons()
  .then((pokemons) => {
    // Cria lista para armazenar pokemons
    const listItems = [];

    // Pega cada pokemon e chama a função para converter em lista
    for (let i = 0; i < pokemons.length; i++) {
      const pokemon = pokemons[i];
      // Adiciona pokemon formatado em HTML na lista
      listItems.push(convertPokemonToLi(pokemon.name));
    }

    // Printa no console lista de pokemons
    console.log(listItems);
  })
  // Retorna erro caso promise dê errado
  .catch((erro) => console.log(erro));
