import { Component,
  OnInit,
   ChangeDetectionStrategy,
  ChangeDetectorRef,
  EventEmitter,
  Output, Input } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { POKEMONS } from '../../../app/database_pokemons';


@Component({

  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PokemonsComponent implements OnInit {
  pokemons = POKEMONS;

  selectedPokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pokemon: Pokemon): void {
  this.selectedPokemon = pokemon;
  }
}
