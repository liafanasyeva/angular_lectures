import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Pokemon } from '../../pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  public POKEMONS: Pokemon[] = [
    { id: 1, name: 'Nice',  damage: 10, caught: false},
    { id: 2, name: 'Narco' , damage: 30, caught: false},
    { id: 3, name: 'Bombasto' , damage: 50, caught: true},
    { id: 4, name: 'Celeritas' , damage: 10, caught: false},
    { id: 5, name: 'Magneta', damage: 100 , caught: false},
    { id: 6, name: 'RubberMan' , damage: 130, caught: false},
    { id: 7, name: 'Dynama', damage: 6 , caught: true},
    { id: 8, name: 'Dr IQ' , damage: 40 , caught: false},
    { id: 9, name: 'Magma', damage: 60 , caught: false},
    { id: 10, name: 'Tornado', damage: 2, caught: false}
  ];

  public filteredPokemons: Pokemon[];

  constructor() { }
  
  public getPokemons(): Observable<Pokemon[]> {
    return of(this.POKEMONS);
  }

  public getPokemonById(id: number): Observable<Pokemon>{
    return of(this.POKEMONS.find((pokemon: Pokemon) => pokemon.id === id));
  }

  public filterPokemons(name: string): Observable<Pokemon[]> {
    return of(
      this.filteredPokemons = this.POKEMONS.filter((pokemon: Pokemon) => pokemon.name === name)
      );
  }
}
