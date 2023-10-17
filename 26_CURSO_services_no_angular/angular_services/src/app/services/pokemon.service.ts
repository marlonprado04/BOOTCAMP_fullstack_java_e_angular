import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Cria variável para armazenar URL da pokeApi
  private baseURL: string = "";
  // Cria variável para armazenar dados do Pokémon saídos da requisição
  private pokeData: any;

  constructor(
    private http: HttpClient
  ) {
    // Ao construir o serviço, passa a URL do ambiente (environment) para a variável do serviço
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string) {
    // Realiza uma requisição HTTP GET para buscar dados de um Pokémon
    // A URL é construída combinando a URL base com o nome do Pokémon fornecido como argumento
    this.pokeData = this.http.get(`${this.baseURL}${pokemonName}`);

    // Exibe os dados do Pokémon no console (pode ser removido em produção)
    console.log(this.pokeData);
  }
}
