const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// Fetch nos retorna uma promise
// Que é a promessa de um resultado assincrono de uma busca na API
fetch(url)
    // then serve para trabalhar com uma consulta bem sucedida com a api
    .then((response) => response.json())

    // Trabalhando com o retorno da função acima (que é um promise da conversão, já que pode não funcionar)
    .then((jsonbody) => console.log(jsonbody))

    //catch serve para trabalhar com a consulta mal sucedida
    .catch((erro) => console.log(erro))
