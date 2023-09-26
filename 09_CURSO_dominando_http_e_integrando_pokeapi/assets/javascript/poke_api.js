// Declarando objeto para armazenar funções
const pokeApi = {};

// Atribuindo função para pegar os detalhes a partir da URL
pokeApi.getPokemonDetails = (pokemon) => {
  return fetch(pokemon.url).then((response) => response.json());
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
