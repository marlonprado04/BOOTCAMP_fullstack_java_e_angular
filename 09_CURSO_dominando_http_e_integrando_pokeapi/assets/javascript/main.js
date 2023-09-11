const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonList = document.getElementById("pokemonList");
console.log(pokemonList);

// Função para converter resultado de API para lista do HTML
function convertPokemonToLi (pokemon){
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

            </li>`
}

// Primeiro fetch, que retorna uma promise
fetch(url)
  // Pega o resultado da promise e converte em json
  .then((response) => response.json())
  // Pega o json e extrai apenas o requests (lista de pokemons)
  .then((jsonBody) => jsonBody.results)
  //Pega a lista de pokemon e retorna no console
  .then((pokemons) => {
    // Pega cada pokemon e chama a função para converter em lista 
    for (let i = 0; i < pokemons.length; i++) {
        const pokemon = pokemons[i];
        pokemonList.innerHTML += convertPokemonToLi(pokemon.name);
    }
  })
  // Retorna erro caso promise dê errado
  .catch((erro) => console.log(erro));
