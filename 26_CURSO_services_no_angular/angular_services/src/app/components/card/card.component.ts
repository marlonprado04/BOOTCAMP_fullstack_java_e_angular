import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  // Criando propriedades do pokemon
  name: string = "CHARIZARD"
  attributesTypes: string[] = ['Fire', 'Wing']

  constructor(
    private service: PokemonService
  ) { }

  ngOnInit(): void {

    this.service.getPokemon("charizard");
  }

}
