import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-filter',
  templateUrl: './pokemon-filter.component.html',
  styleUrls: ['./pokemon-filter.component.sass']
})
export class PokemonFilterComponent implements OnInit {
  public pokemonName:string = '';
  @Output() pokemonNameFilter = new EventEmitter<string>();
  @Output() resetPokemonFilter: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public filterPokemons() {
    this.pokemonNameFilter.emit(this.pokemonName);
  }

  public resetFilter() {
    this.resetPokemonFilter.emit();
  }

}
