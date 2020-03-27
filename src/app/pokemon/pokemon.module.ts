import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list/pokemons.component';
import { CardsComponent } from './cards/cards.component';


@NgModule({
  declarations: [
    PokemonsComponent, CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonsComponent, CardsComponent
  ]
})
export class PokemonModule { }
