import { Component, EventEmitter, Output } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent {
  pokemon: Pokemon[] = []

  constructor(private pokemonService: PokemonService){
  }

  ngOnInit() {
    this.pokemon = this.pokemonService.getAllPokemon();
  }

  onPokemonSelected(pokemon: Pokemon){
    this.pokemonService.pokemonSelectedEvent.emit(pokemon)
  }

  
}
