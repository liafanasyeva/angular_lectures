import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../../../app/database_pokemons';


@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass']
})

export class PokemonsComponent implements OnInit {
  pokemons = POKEMONS;

  private selectedPokemon: Pokemon;
  public listOfPokemons: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public onSelect(pokemon: Pokemon): void {
  this.selectedPokemon = pokemon;
  }

  public changeView(): void {
    this.listOfPokemons = !this.listOfPokemons;
    console.log(this.listOfPokemons)
  }

  public catchPokemon(pokemon: Pokemon): void {
    pokemon.caught = !pokemon.caught;
    console.log('Is pokemon ' + pokemon.name +  ' caught? ' + pokemon.caught );
  }
}
