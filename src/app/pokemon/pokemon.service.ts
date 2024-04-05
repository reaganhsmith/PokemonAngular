import { EventEmitter, Injectable, Output } from '@angular/core';
import { Pokemon } from './pokemon.model';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  @Output() pokemonSelectedEvent = new EventEmitter<Pokemon>();
  @Output() pokemonChangedEvent = new EventEmitter<Pokemon[]>();
  pokemonListChangedEvent = new Subject<Pokemon[]>();
  pokemonUrl = "http://localhost:3000/pokemon"

  pokemon: Pokemon[] = [];
  maxPokemonId: number;
  pokemonListClone!: Pokemon[];

  constructor(private httpClient: HttpClient) {
    this.maxPokemonId = this.getMaxId();
  }

  getAllPokemon(): Pokemon[] {
     this.httpClient
      .get<Pokemon[]>(this.pokemonUrl)
      .subscribe((pokemon: Pokemon[]) => {
        this.pokemon = pokemon;
        this.maxPokemonId = this.getMaxId();
        this.pokemonListChangedEvent.next(this.pokemon.slice().sort(this.sortById))
      });

      return this.pokemon.slice();
  }

  sortById(a: Pokemon, b: Pokemon) {
    const idA = +a.id;
    const idB = +b.id;
    return idA - idB;
  }

  storePokemon() {
    this.httpClient
      .put(this.pokemonUrl, JSON.stringify(this.pokemon), {
        headers: new HttpHeaders().set('Content-Type', 'application/json'),
      })
      .subscribe(() => {
        const sortedPokemon = this.pokemon.slice().sort(this.sortById);
        this.pokemonListChangedEvent.next(sortedPokemon);
      });
  }

  getPokemon(id: string): Pokemon {
    return this.pokemon[+id];
  }

  getMaxId(): number {
    let maxId = 0;
    for (let pokemon of this.pokemon) {
      let currentId = maxId;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addPokemon(newPokemon: Pokemon) {
    if (!newPokemon) return;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient
      .post<{ message: string, pokemon: Pokemon }>(
        this.pokemonUrl,
        newPokemon,
        { headers: headers }).subscribe({
          next: (res) => {
            console.log(res.message);
            this.pokemon.push(res.pokemon);
            const sortedPokemon = this.pokemon.slice().sort(this.sortById);
            this.pokemonListChangedEvent.next(sortedPokemon);
          }
        });
  }

  updatePokemon(originalPokemon: Pokemon, newPokemon: Pokemon) {
    if (!originalPokemon || !newPokemon) {
      return;
    }

    const pos = this.pokemon.findIndex(d => d.id === originalPokemon.id);

    if (pos < 0) {
      return;
    }

    newPokemon.id = originalPokemon.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.httpClient.put(`${this.pokemonUrl}/${newPokemon.id}`,
      newPokemon, { headers: headers })
      .subscribe(
        () => {
          this.pokemon[pos] = newPokemon;
          const sortedPokemon = this.pokemon.slice().sort(this.sortById);
          this.pokemonListChangedEvent.next(sortedPokemon);
        }
      );
  }

  deletePokemon(pokemon: Pokemon) {
    if (!pokemon) {
      return;
    }
    const pos = this.pokemon.indexOf(pokemon);

    if (pos < 0) {
      return;
    }

    this.httpClient.delete(`${this.pokemonUrl}/${pokemon.id}`)
      .subscribe(
        () => {
          this.pokemon.splice(pos, 1);
          const sortedPokemon = this.pokemon.slice().sort(this.sortById);
          this.pokemonListChangedEvent.next(sortedPokemon);
        }
      );
  }
}
