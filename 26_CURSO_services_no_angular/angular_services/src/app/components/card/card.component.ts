import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // Criando variável pokemon do tipo PokemonData (com toda estrutura de um pokemon)
  pokemon: PokemonData;

  // Criando propriedades do pokemon
  name: string = "CHARIZARD"
  attributesTypes: string[] = ['Fire', 'Wing']

  constructor(
    private service: PokemonService
  ) {
    // Inicializando pokemon com valores vazios para não dar erro;
    this.pokemon = {
      id: 0,
      name: "",
      sprites: {
        front_default: ""
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.service.getPokemon("charizard").subscribe(
      {
        next: (res) => {
          // Passando as informações da consulta da API para a variável pokemon criada nesse componente
          this.pokemon = {
            id: res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types
          }
          console.log(res.types[0].type.name)
        },
        error: (err) => console.log(err)
      }
    );
  }

}
