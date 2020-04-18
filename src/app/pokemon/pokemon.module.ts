import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {DamageBorderDirective} from './directives/damage-border.directive';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { PokemonFilterComponent } from './pokemon-filter/pokemon-filter.component';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [
    PokemonsComponent, PokemonDetailsComponent, DamageBorderDirective, PokemonFilterComponent
  ],
  imports: [
    CommonModule, FormsModule, AppRoutingModule, ButtonModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonModule { }
