import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemon/list/pokemons.component';
import { CardsComponent } from './pokemon/cards/cards.component';

const routes: Routes = [
  { path: '', component: PokemonsComponent },
  { path: 'cards', component: CardsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
