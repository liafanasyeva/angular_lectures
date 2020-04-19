import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './list/pokemons.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import {DamageBorderDirective} from './directive/damage-border.directive';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonFilterComponent } from './pokemon-filter/pokemon-filter.component';
import { ButtonModule } from './button/button.module';
import { EditDetailsComponent } from './pokemon-details/edit-details/edit-details.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonService } from './service/pokemon.service';
import { CloseEditFormGuard } from './guard/close-edit-form.guard';
import { ModalComponent } from './pokemon-details/modal/modal.component';

@NgModule({
  declarations: [
    PokemonsComponent, PokemonDetailsComponent, DamageBorderDirective, PokemonFilterComponent, EditDetailsComponent, ModalComponent
  ],
  imports: [
    CommonModule, FormsModule, PokemonRoutingModule, ButtonModule, ReactiveFormsModule
  ],
  exports: [
    PokemonsComponent, PokemonsComponent, PokemonDetailsComponent, DamageBorderDirective, PokemonFilterComponent, EditDetailsComponent
  ],
  providers: [
     PokemonService, EditDetailsComponent, CloseEditFormGuard
  ]
})
export class PokemonModule { }
