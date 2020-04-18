import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../service/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonsComponent implements OnInit {
  public pokemons:Pokemon[] = [];
  public selectedPokemon: Pokemon;
  public isListOfPokemons: boolean;

  @Input() pokemon: Pokemon;
  @Output() changeButtonParent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService ) {
   }
   
  ngOnInit(): void {
    this.getPokemons();
    this.isListOfPokemons = true;
  }

  public filterPokemons (pokemonName: string) {
    this.pokemonService.filterPokemons(pokemonName)
        .subscribe(pokemons => this.pokemons = pokemons);
    console.log(pokemonName);
  }

  public getPokemons(): void {
    this.pokemonService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
  }

  public catchPokemon(id: number): void {
    this.pokemonService.getPokemonById(id)
    .subscribe(pokemon => this.pokemon = pokemon);
    this.pokemon.caught = !this.pokemon.caught;
  }
  
  public changeView(): void {
    this.isListOfPokemons = !this.isListOfPokemons;
  }
}
