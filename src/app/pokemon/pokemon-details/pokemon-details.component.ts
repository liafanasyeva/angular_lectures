import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../service/pokemon.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon: Pokemon;
  public editMode: boolean = false;
  public pokemonNewName: string;
  public pokemonNewDamage: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPokemon();
    this.disableEditing();
  }

  public getPokemon(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(id)
        .subscribe(pokemon=>this.pokemon = pokemon);
  }

  public goBack(): void {
    this.location.back();
  }

  public enableEditing():any {
    console.log("check");
    return this.editMode = true;
  }

  public disableEditing(): any {
    return this.editMode = false;
  }

  public editDetails(name: string, damage: number): void {
    console.log(name, damage);
     
    this.pokemonService.editPokemon(this.pokemon, name, damage)
        .subscribe(() => this.goBack());
  }


}
