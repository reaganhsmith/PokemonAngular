import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../../pokemon.model';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent {
  @Input() pokemon!: Pokemon;
  @Output() pokemonSelected = new EventEmitter<void>();
  @Input() index: number = 0; // Set default value as per your requirement

  onSelected() {
    this.pokemonSelected.emit();
  }
}
