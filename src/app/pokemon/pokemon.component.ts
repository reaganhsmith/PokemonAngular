import { Component } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemon: Pokemon[] = [
    new Pokemon(
      "1", "Koffing", "Poison",
      "Psychic", "0109", "Purple", 
      "Weezing", "Gas", 
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/109.png"),
    new Pokemon(
      "2", "Articuno", "Ice, Flying",
      "Steel", "0144", "Blue", 
      "Final Evolution", "Freeze", 
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/144.png"
    )
  ]

}
