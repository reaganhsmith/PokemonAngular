import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { MOCKPOKEMON } from './MOCKPOKEMON';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  @Output() pokemonSelectedEvent = new EventEmitter<Pokemon>();

  pokemon: Pokemon[] = [];

  constructor() {
    this.pokemon = MOCKPOKEMON;
  }

  getAllPokemon() {
    return this.pokemon.slice();
  }

  getPokemon(id: string): Pokemon | null {
    for (const pokemon of this.pokemon) {
      if (pokemon.id == id) {
              return pokemon;
      }
    }
    return null;
  }
  onSelectedPokemon(pokemon: Pokemon){
    this.pokemonSelectedEvent.emit(pokemon);
  }
}
