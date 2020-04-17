import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../../../app/database_pokemons';
import { PokemonService } from '../service/pokemon.service';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonsComponent implements OnInit {
  pokemons:Pokemon[];

  public selectedPokemon: Pokemon;
  public listOfPokemons: boolean = true;

  @Input() pokemon: Pokemon;
  @Output() changeButtonParent: EventEmitter<number> = new EventEmitter<number>();

  constructor(private pokemonService: PokemonService ) {
   }
   
  ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }

  public onSelect(pokemon: Pokemon): void {
  this.selectedPokemon = pokemon;
  }

  public catchPokemon(id: number): void {
    const pokemon = this.pokemons.find(element => element.id === id);
    pokemon.caught = !pokemon.caught;
  }
  
  public changeView(): void {
    this.listOfPokemons = !this.listOfPokemons;
    console.log(this.listOfPokemons)
  }
}
