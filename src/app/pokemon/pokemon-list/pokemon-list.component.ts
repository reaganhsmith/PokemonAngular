import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { PokemonService } from '../pokemon.service';
import { Subscription } from 'rxjs';
import { PokemonFilterPipe } from '../pokemon-filter.pipe';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'] // Change styleUrl to styleUrls
})
export class PokemonListComponent implements OnInit {
  pokemon: Pokemon[] = [];
  subscription!: Subscription;
  term!: string;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.subscription = this.pokemonService.getAllPokemon()
      .subscribe((pokemonList: Pokemon[]) => {
        this.pokemon = pokemonList;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  search(value: string) {
    this.term = value;
  }
}
