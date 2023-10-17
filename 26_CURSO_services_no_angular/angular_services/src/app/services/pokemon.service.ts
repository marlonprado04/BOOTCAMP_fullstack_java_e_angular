import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  // Cria variável para armazenar URL da pokeApi
  private baseURL: string = "";

  constructor() {
    // Ao construir o service passa a URL do environment para a variável do service
    this.baseURL = environment.pokeApi
  }

  getPokemon(pokemonName: string) {
    console.log(this.baseURL);
  }
}
