import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PokemonsComponent } from "./list/pokemons.component";
import { PokemonDetailsComponent } from "./pokemon-details/pokemon-details.component";
import { EditDetailsComponent } from "./pokemon-details/edit-details/edit-details.component";
import { Routes, RouterModule } from "@angular/router";
import { CloseEditFormGuard } from './guard/close-edit-form.guard';

const routes: Routes = [
  { path: "", component: PokemonsComponent },
  {
    path: "details/:id",
    component: PokemonDetailsComponent,
    children: [
      {
        path: "edit/:id",
        component: EditDetailsComponent,
        canDeactivate: [CloseEditFormGuard]
      },
    ],
  },

  { path: "pokemons", component: PokemonsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
