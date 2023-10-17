import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'

import {PokemonData} from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Cria variável para armazenar URL da pokeApi
  private baseURL: string = "";
  // Cria variável para armazenar dados do Pokémon saídos da requisição (a partir do modelo) ou qualquer coisa
  private pokeData: PokemonData | any;

  constructor(
    private http: HttpClient
  ) {
    // Ao construir o serviço, passa a URL do ambiente (environment) para a variável do serviço
    this.baseURL = environment.pokeApi;
  }

  getPokemon(pokemonName: string): Observable <PokemonData>{
    // Realiza uma requisição HTTP GET para buscar dados de um Pokémon
    // A URL é construída combinando a URL base com o nome do Pokémon fornecido como argumento
    this.pokeData = this
                    .http
                    .get<PokemonData>
                    (`${this.baseURL}${pokemonName}`);

    // Retornando resultado da requisição
    return this.pokeData;
  }
}
