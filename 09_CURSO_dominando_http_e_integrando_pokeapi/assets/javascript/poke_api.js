// Declarando objeto para armazenar funções
const pokeApi = {};

// Atribuindo função getPokemons ao objeto, com valores offset e limit em default
pokeApi.getPokemons = (offset = 0, limit = 10) => {
  // URL da requisição
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  // Retornando lista de pokemons tratada
  return (
    fetch(url)
      // Pega o resultado da promise e converte em json
      .then((response) => response.json())
      // Pega o json e extrai apenas o requests (lista de pokemons)
      .then((jsonBody) => jsonBody.results)
      // Printando erro caso haja
      .catch((error) => console.log(error))
  );
};
