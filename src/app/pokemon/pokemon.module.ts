import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list/pokemons.component';
import { CatchButtonComponent } from './catch-button/catch-button.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {DamageBorderDirective} from './directives/damage-border.directive'
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    PokemonsComponent, CatchButtonComponent, PokemonDetailsComponent, DamageBorderDirective, FilterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonModule { }