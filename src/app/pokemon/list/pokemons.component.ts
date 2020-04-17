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
  public pokemons:Pokemon[];

  public selectedPokemon: Pokemon;
  public isListOfPokemons: boolean = true;

  @Input() pokemon: Pokemon;
  @Output() changeButtonParent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService ) {
   }
   
  ngOnInit(): void {
    this.getPokemons();
  }
  
  public onSelect(pokemon: Pokemon): void {
  this.selectedPokemon = pokemon;
  }

  public getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  public catchPokemon(id: number): void {
    const pokemon =  this.pokemonService.getPokemonById(id);
    pokemon.caught = !pokemon.caught;
  }
  
  public changeView(): void {
    this.isListOfPokemons = !this.isListOfPokemons;
  }
}
