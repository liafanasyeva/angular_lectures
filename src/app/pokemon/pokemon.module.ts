import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list/pokemons.component';
import { CardsComponent } from './cards/cards.component';
import { CatchButtonComponent } from './catch-button/catch-button.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    PokemonsComponent, CardsComponent, CatchButtonComponent, PokemonDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonsComponent, CardsComponent
  ]
})
export class PokemonModule { }
