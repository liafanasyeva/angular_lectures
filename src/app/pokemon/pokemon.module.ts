import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list/pokemons.component';
import { CatchButtonComponent } from './catch-button/catch-button.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {DamageBorderDirective} from './directives/damage-border.directive'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { PokemonFilterComponent } from './pokemon-filter/pokemon-filter.component';
import { EditButtonComponent } from './edit-button/edit-button.component';

@NgModule({
  declarations: [
    PokemonsComponent, CatchButtonComponent, PokemonDetailsComponent, DamageBorderDirective, PokemonFilterComponent, EditButtonComponent
  ],
  imports: [
    CommonModule, FormsModule, AppRoutingModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonModule { }
