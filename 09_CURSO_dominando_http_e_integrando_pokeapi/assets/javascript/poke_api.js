// Declarando objeto para armazenar funções
const pokeApi = {};

// Função para converter dados da API para nosso modelo
function convertPokeApiDetailToPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  // Converte lista de tipos em variável local
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  // Desconstroi lista e atribui primeiro valor (indice 0)
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;
  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

// Atribuindo função para pegar os detalhes a partir da URL
pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) =>
    response.json()
    .then((pokemon) => {
      return convertPokeApiDetailToPokemon(pokemon);
    })
  );
};

// Atribuindo função getPokemons ao objeto, com valores offset e limit em default
pokeApi.getPokemons = (offset = 0, limit = 5) => {
  // URL da requisição
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  // Retornando lista de pokemons tratada
  return (
    fetch(url)
      // Pega o resultado da promise e converte em json
      .then((response) => response.json())
      // Pega o json e extrai apenas o requests (lista de pokemons)
      .then((jsonBody) => jsonBody.results)
      // Mapeia a lista de pokemons e pega as URL através do getPokemonDetails
      .then((pokemons) => pokemons.map(pokeApi.getPokemonDetails))
      // Transforma a de urls em promises
      .then((detailRequests) => Promise.all(detailRequests))
      // Retorna a lista de detalhes de pokemons
      .then((pokemonsDetails) => pokemonsDetails)
      // Printando erro caso haja
      .catch((error) => console.log(error))
  );
};
