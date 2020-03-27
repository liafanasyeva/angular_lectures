import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../database_pokemons';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.sass']
})
export class CardsComponent implements OnInit {
  pokemons = POKEMONS;
  @Input() pokemon: Pokemon;

  constructor() { }

  catchPokemon(pokemon: Pokemon): void {
    pokemon.caught = !pokemon.caught;
    console.log('Is pokemon ' + pokemon.name +  ' caught? ' + pokemon.caught );
  }

  ngOnInit() {

  }

}
