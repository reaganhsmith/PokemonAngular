import { Component } from '@angular/core';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  selectedPokemon!: Pokemon;

}
