const pokemonList = document.getElementById("pokemonList");

// Função para converter resultado de API para lista do HTML
function convertPokemonToLi(pokemon) {
  return `<li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>

                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
                        alt="${pokemon.name}">
                </div>

            </li>`;
}

// Chamando requisição de API e listando pokemon no browse
pokeApi
  .getPokemons()
  .then((pokemons) => {
    // Primeiro mapeia todos os pokemons e os converte em li de HTML via MAP e convertPokemonToLi
    // Depois unifica tudo em uma string sem separador via JOIN
    // Depois incrementa lista convertida em string no html via innerHTML
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonList.innerHTML = newHtml; 
  })
  // Retorna erro caso promise dê errado
  .catch((erro) => console.log(erro));
