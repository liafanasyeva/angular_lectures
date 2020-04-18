import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonsComponent } from './pokemon/list/pokemons.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';


const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'details/:id', component: PokemonDetailsComponent },
  { path: 'pokemons', component: PokemonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
