import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../service/pokemon.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon: Pokemon;
  public editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id)
        .subscribe(pokemon=>this.pokemon = pokemon);
  }

  public goBack(): void {
    this.location.back();
  }

  public enableEditing():boolean {
    console.log("check");
    return this.editMode = true;
  }

  public disableEditing(mode: boolean): boolean {
    console.log(this.editMode);
    return this.editMode = mode;
  }

}
