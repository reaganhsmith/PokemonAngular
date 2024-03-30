import { Component } from '@angular/core';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent {
  public pokemon = new Pokemon(
      "1", "Koffing", "Poison",
      "Psychic", "0109", "Purple", 
      "Weezing", "Gas", 
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png")

}
