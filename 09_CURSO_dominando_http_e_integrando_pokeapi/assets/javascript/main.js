const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

// Fetch nos retorna uma promise
// Que é a promessa de um resultado assincrono de uma busca na API
fetch(url)
    // then serve para trabalhar com uma consulta bem sucedida com a api
    .then(function (response) {
        // Convertendo a resposta em json, que retorna uma promise onde podemos usar o padrão then / catch / finnaly
        return response.json()
    })

    // Trabalhando com o retorno da função acima (promise da conversão)
    .then(function (jsonbody){
        console.log(jsonbody);
    })

    //catch serve para trabalhar com uma consulta mal sucedida com a api
    .catch(function (erro){ //
        console.log(erro);
    })

    // finally serve para trabalhar com a consulta independente do sucesso dela ou não
    .finally(function(){
        console.log("Requisição concluída!")
    })
